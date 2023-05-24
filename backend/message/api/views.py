from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from accounts.models import User
from message.models import Message
from .serializers import MessageSerializer, UserSerializer
from rest_framework.views import APIView
from accounts.api.permissions import IsVerifiedUser
from django.db.models import Q
from django.http import JsonResponse
from rest_framework import generics
from django.core.serializers import serialize
from django.shortcuts import get_object_or_404

class MessageView(APIView):

    permission_classes = [IsVerifiedUser]
    serializer_class = MessageSerializer

    def get(self, request, friend_id):
        sender = User.objects.get(username = request.user.username)
        receiver = User.objects.get(id = friend_id)
        queryset = Message.objects.filter(msg_sender = receiver, msg_receiver = sender)
        model_set2 = Message.objects.filter(msg_sender = sender, msg_receiver = receiver)
        queryset2 = queryset.union(model_set2, all=True)
        serializer = self.serializer_class(queryset2, many = True)
        return Response(serializer.data, status = status.HTTP_200_OK)

    def post(self, request, friend_id):
        try:
            sender = User.objects.get(username = request.user.username)
            receiver = User.objects.get(id = friend_id)
        except User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = self.serializer_class(data = request.data)

        if serializer.is_valid():

            serializer.save(msg_sender = sender, msg_receiver = receiver)
            return Response(serializer.data, status = status.HTTP_201_CREATED)

        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

class PartnerList(APIView):

    permission_classes = [IsVerifiedUser]#in future will see according to public and private account

    def get(self,request):

        try:
            current_user = request.user
            users = User.objects.exclude(id=current_user.id)
            user_data = []

            for user in users:
                # Retrieve the messages between the current user and the other user
                messages = Message.objects.filter(
                    (Q(msg_sender=current_user) & Q(msg_receiver=user)) |
                    (Q(msg_sender=user) & Q(msg_receiver=current_user))
                ).order_by('-created_at')

                if messages.exists():
                    # Prepare the message data for each conversation
                    messages_data = []
                    for message in messages:
                        messages_data.append({
                            'id': message.id,
                            'body': message.body,
                            'seen': message.seen,
                            'created_at': message.created_at,
                            'msg_sender':message.msg_sender_id,
                            'msg_reciever':message.msg_receiver_id
                        })
                        
                    # Prepare the user data with the conversation messages
                    user_data.append({
                        'id': user.id,
                        'name':user.first_name,
                        'username': user.username,
                        'messages': messages_data
                    })

            # Return the user data with their conversation messages as JSON response
            return JsonResponse({'users': user_data})
    

        except User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        


class MessageChat(generics.ListAPIView):
    permission_classes = [IsVerifiedUser]
    serializer_class = MessageSerializer

    def get_queryset(self):
        login_user = self.request.user
        user_id = self.kwargs['userId']
        user = User.objects.get(id=user_id)
        
        messages = Message.objects.filter(
            (Q(msg_sender=login_user) & Q(msg_receiver=user)) |
            (Q(msg_sender=user) & Q(msg_receiver=login_user))
        ).order_by('-created_at')

        return messages

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        data = {
            'id': request.user.id,
            'name': request.user.first_name,
            'username': request.user.username,
            'messages': serializer.data
        }
        return Response(data, status=status.HTTP_200_OK)

class PostUserChat(generics.CreateAPIView):
    permission_classes = [IsVerifiedUser]
    serializer_class = MessageSerializer
    
    def post(self, request, chat_user_id):
        try:
            login_user = request.user
            chat_user = User.objects.get(id=chat_user_id)
            message_body = request.data.get('message')

            # Save the message in the database
            message = Message.objects.create(msg_sender=login_user, msg_receiver=chat_user, body=message_body)
            message.save()

            # Optionally, you can serialize the message and return it in the response
            serializer = MessageSerializer(message)
            response_data = serializer.data

            return Response(response_data, status=status.HTTP_201_CREATED)

        except User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
class GetUserId(generics.RetrieveAPIView):
    permission_classes = [IsVerifiedUser]
    queryset = User.objects.all()
    lookup_field = 'username'

    def get(self, request, *args, **kwargs):
        username = self.kwargs['username']
        try:
            user = self.get_object()
            user_id = user.id
            return JsonResponse({'user_id': user_id})
        except User.DoesNotExist:
            return JsonResponse({'error': 'User not found'}, status=404)
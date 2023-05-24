from django.urls import path
from .views import MessageView, PartnerList,MessageChat,PostUserChat

urlpatterns = [
    path('chats/<int:friend_id>',MessageView.as_view()),
    path('chats/users/', PartnerList.as_view(), name='partner-list'),
    path('chats/message/<int:userId>/', MessageChat.as_view(), name='message-chat'),
    path('user-chat/<int:chat_user_id>/', PostUserChat.as_view(), name = 'post-user-chat'),
    path('user/<str:username>/', GetUserId.as_view(), name='get-user-id'),
]

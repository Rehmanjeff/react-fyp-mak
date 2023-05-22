from rest_framework import serializers
from message.models import Message
from accounts.models import User

class MessageUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['username']


class MessageSerializer(serializers.ModelSerializer):
    msg_sender = MessageUserSerializer(read_only = True)
    msg_receiver = MessageUserSerializer(read_only = True)
    class Meta:
        model = Message
        fields = ['msg_sender', 'msg_receiver','body', 'created_at']
    def validate(self, attrs):
        import CyberbullyingDetectionClass as model
        model.text[0] = attrs['body']
        result_val = model.scan.detectBullying(model.text)
        #print(result_val)
        if(result_val['Offensive Words'] != "None"):
            raise serializers.ValidationError({"comment": "You have entered offensive words: " + str(result_val['Offensive Words'])\
                + ",Severity Level of your Content is: " + str(result_val['Severity Level']) 
                + ",Type of Bullying you are doing is: " + str(result_val['Type'])

                                               })
        elif(result_val['Offensive Words']=="None"):
            return attrs
        return attrs

class UserSerializer(serializers.ModelSerializer):

    """ returns count of users that this user follows """
    following_count = serializers.SerializerMethodField()

    """ returns count of users that are following this user """
    followers_count = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'following_count', 'followers_count']

    def get_following_count(self, obj):
        return obj.follows.count()

    def get_followers_count(self, obj):
        return obj.followed_by.count()
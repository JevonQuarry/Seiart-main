
from apps.users.serializers import UserSerializer
from .models import Post
from rest_framework import serializers


class ListPostSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(allow_null=True)
    password = serializers.CharField(write_only=True)
    token = serializers.CharField(read_only=True)
    token_expires_at = serializers.DateTimeField(read_only=True)
    user = UserSerializer()

    class Meta:
        model = Post
        fields = '__all__'
        depth = 1


class PostSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(allow_null=True)
    user = UserSerializer()

    class Meta:
        model = Post
        fields = '__all__'
        depth = 1


class DetailPostSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(allow_null=True)
    user = UserSerializer(many=False, read_only=True)

    class Meta:
        model = Post
        fields = '__all__'
        depth = 1

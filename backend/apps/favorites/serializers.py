from apps.posts.serializers import ListPostSerializer
from .models import Favorite
from rest_framework import serializers
from apps.users.serializers import UserSerializer


class FavoriteSerializer(serializers.ModelSerializer):
    #image = serializers.ImageField(allow_null=True)

    class Meta:
        model = Favorite
        fields = '__all__'


class ListFavoriteSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=False, read_only=True)
    post = ListPostSerializer()

    class Meta:
        model = Favorite
        fields = '__all__'
        depth = 1

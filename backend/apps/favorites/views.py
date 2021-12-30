from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response
from apps.posts.models import Post
from .serializers import ListFavoriteSerializer, FavoriteSerializer

from .models import Favorite
from apps.users.mixins import CustomLoginRequiredMixin

# Create your views here.


class favoriteList(CustomLoginRequiredMixin, generics.ListAPIView):
    queryset = Favorite.objects.order_by('-created_at').all()
    serializer_class = ListFavoriteSerializer

    def get(self, request, *args, **kwargs):
        self.queryset = Favorite.objects.order_by(
            '-created_at').filter(user_id=request.login_user.id)
        return self.list(request, *args, **kwargs)


class favoriteAdd(CustomLoginRequiredMixin, generics.CreateAPIView):
    queryset = Favorite.objects.all()
    serializer_class = FavoriteSerializer

    def post(self, request, *args, **kwargs):
        serializer = FavoriteSerializer()
        serializer.validate(request.data)
        posts_id = int(request.data['post'])
        post = Post.objects.get(id=posts_id)

        existed = Favorite.objects.filter(
            post=posts_id, user=request.login_user.id)

        # if existed is not None:
        #     return Response('Post is already Saved', status.HTTP_400_BAD_REQUEST)

        if (post is None):
            return Response('Post not found.', status.HTTP_400_BAD_REQUEST)

        # request.data._mutable = True
        request.data['user'] = request.login_user.id
        request.data['post'] = post.id

        return self.create(request, *args, **kwargs)


class favoriteDelete(CustomLoginRequiredMixin, generics.DestroyAPIView):
    queryset = Favorite.objects.all()
    serializer_class = FavoriteSerializer
    lookup_field = 'id'

    def delete(self, request, *args, **kwargs):
        # Get URL Param
        id = self.kwargs['id']

        favorite = Favorite.objects.filter(
            user_id=request.login_user.id, id=id).first()

        if favorite is None:
            return Response('favorite not found.', status.HTTP_400_BAD_REQUEST)

        self.destroy(request, *args, **kwargs)

        return Response({'message': "Success."})

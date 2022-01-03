from django.shortcuts import render
from django.views import generic
from rest_framework import generics
from rest_framework.response import Response
from apps.users.mixins import CustomLoginRequiredMixin
from apps.users.models import User
from .serializers import DetailPostSerializer, ListPostSerializer, PostSerializer
from .models import Post

# Create your views here.


class PostDetail(CustomLoginRequiredMixin, generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = DetailPostSerializer
    pagination_class = None
    lookup_field = "id"

    def get(self, request, *args, **kwargs):
        id = self.kwargs['id']
        self.queryset = Post.objects.filter(id=id)
        return self.list(request, *args, **kwargs)


class PostList(generics.ListAPIView):
    queryset = Post.objects.order_by("-created_at").all()
    serializer_class = ListPostSerializer


class PostAdd(CustomLoginRequiredMixin, generics.CreateAPIView):
    queryset = Post.objects.order_by("-created_at").all()
    serializer_class = PostSerializer

    def post(self, request, *args, **kwargs):

        #Override create chat method to get depth response
        new_post = Post.objects.create(
            user=User.objects.get(id=request.login_user.id), 
            image=request.data['image'],
            body=request.data['name']
        )
        serializer = PostSerializer(new_post)

        return Response(serializer.data)



class PostDelete(generics.DestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

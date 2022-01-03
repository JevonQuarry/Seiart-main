from django.shortcuts import render
from typing import Generic
from rest_framework import generics
from rest_framework.response import Response
from .serializers import UserSerializer, UserSignUpSerializer, UserSignInSerializer, UserUpdateSerializer
from .models import User
from .mixins import CustomLoginRequiredMixin
from rest_framework import status
from rest_framework.renderers import JSONRenderer

# Create your views here.


class UserSignUp(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSignUpSerializer


class UserSignIn(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSignInSerializer


class UserCheckLogin(CustomLoginRequiredMixin, generics.RetrieveAPIView):

    def get(self, request, *args, **kwargs):

        serializer = UserSerializer([request.login_user], many=True)
        return Response(serializer.data[0])


# class UserUpdate(CustomLoginRequiredMixin, generics.UpdateAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer

#     def update(self, request, *args, **kwargs):
#         user = User.objects.get(pk=self.kwargs['pk'])
#         if user.id != request.login_user.id:
#             response = Response(
#                 {'error': 'You can not update the userprofile not owned by you.'}, status=status.HTTP_404_NOT_FOUND)
#             response.accepted_renderer = JSONRenderer()
#             response.accepted_media_type = "application/json"
#             response.renderer_context = {}
#             return response
#         user.save()
#         serializer = UserSerializer([user], many=True)
#         return Response(serializer.data[0])


class UserList(CustomLoginRequiredMixin, generics.ListAPIView):
    queryset = User.objects.all()[:20]
    serializer_class = UserSerializer


class UserProfile(CustomLoginRequiredMixin, generics.ListAPIView):
    serializer_class = UserSerializer
    pagination_class = None

    def get(self, request, *args, **kwargs):
        serializer = UserSerializer([request.login_user], many=True)
        return Response(serializer.data[0])


class UpdateProfile(CustomLoginRequiredMixin, generics.UpdateAPIView):
    serializer_class = UserUpdateSerializer
    queryset = User.objects.all()
    lookup_field = 'id'

    def put(self, request, *args, **kwargs):

        serializer = UserUpdateSerializer()
        serializer.validate(request.data)

        return self.update(request, *args, **kwargs)

from django.urls import path
from . import views

urlpatterns = [
    path('', views.favoriteList.as_view(), name='favorite_list'),
    path('add/', views.favoriteAdd.as_view(), name='favorite_add'),
    path('delete/', views.favoriteDelete.as_view(), name='favorite_delete'),

]

from django.urls import path
from . import views

urlpatterns = [
    path('detail/<int:id>/', views.PostDetail.as_view(), name='post_detail'),
    path('', views.PostList.as_view(), name='post_list'),
    path('add/', views.PostAdd.as_view(), name='post_add'),
    path('delete/<int:pk>/', views.PostDelete.as_view(), name='post_delete'),
]

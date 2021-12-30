from django.db import models
from apps.users.models import User
from cloudinary.models import CloudinaryField

# Create your models here.


class Post(models.Model):
    class Meta(object):
        db_table = 'post'

    user = models.ForeignKey(
        User, on_delete=models.CASCADE, db_index=True
    )
    body = models.TextField(
        'Body', blank=False, null=True, db_index=True
    )
    image = CloudinaryField(
        'image', blank=True, db_index=True
    )
    created_at = models.DateTimeField(
        'Created Datetime', blank=True, auto_now_add=True
    )
    updated_at = models.DateTimeField(
        'Updated Datetime', blank=True, auto_now=True
    )
    
    @property
    def comments(self):
        return self.related_post.all()

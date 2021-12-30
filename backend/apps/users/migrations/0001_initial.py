# Generated by Django 3.2.4 on 2021-12-30 05:05

import cloudinary.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_name', models.CharField(db_index=True, max_length=50, verbose_name='User Name')),
                ('password', models.CharField(db_index=True, max_length=500, verbose_name='Password')),
                ('email', models.EmailField(db_index=True, max_length=254, verbose_name='email')),
                ('token', models.CharField(blank=True, db_index=True, max_length=500, null=True, verbose_name='token')),
                ('profile', cloudinary.models.CloudinaryField(blank=True, max_length=255, null=True, verbose_name='Profile Picture')),
                ('token_expires_at', models.DateTimeField(blank=True, null=True, verbose_name='Token Expires Datetime')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Created Datetime')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='Updated Datetime')),
            ],
            options={
                'db_table': 'user',
            },
        ),
    ]

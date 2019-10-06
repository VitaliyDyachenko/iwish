from django.db import models


class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    created_at = models.DateField(auto_now_add=True)
    bio = models.CharField(max_length=500)
    likes_design = models.BooleanField()

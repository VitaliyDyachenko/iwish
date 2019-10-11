from rest_framework import viewsets, permissions
from back.models import User
from back.serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    
    serializer_class = UserSerializer

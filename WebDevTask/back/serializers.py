from rest_framework import serializers
from back.models import User


class UserSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    class Meta:
        model = User
        fields = '__all__'

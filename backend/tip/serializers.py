from rest_framework import serializers
from .models import Staff


class UserProfileSerializer(serializers.ModelSerializer):
	user = serializers.StringRelatedField(read_only=True)

	class Meta:
		model = Staff
		fields = '__all__'

from rest_framework import serializers
from .models import Staff, Organization


class UserProfileSerializer(serializers.ModelSerializer):
	user = serializers.StringRelatedField(read_only=True)

	class Meta:
		model = Staff
		fields = '__all__'


class OrganizationSerializer(serializers.ModelSerializer):
	class Meta:
		model = Organization
		fields = '__all__'


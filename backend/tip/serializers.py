from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Staff, Organization, Leader


class UserProfileSerializer(serializers.ModelSerializer):
	user = serializers.StringRelatedField(read_only=True)

	class Meta:
		model = Staff
		fields = '__all__'


class OrganizationSerializer(serializers.ModelSerializer):
	class Meta:
		model = Organization
		fields = '__all__'


class LeaderSerializer(serializers.ModelSerializer):
	class Meta:
		model = Leader
		fields = '__all__'


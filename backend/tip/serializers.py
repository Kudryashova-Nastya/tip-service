from rest_framework import serializers
from .models import *


class StaffSerializer(serializers.ModelSerializer):
	user = serializers.StringRelatedField(read_only=True)

	class Meta:
		model = Staff
		fields = '__all__'


# class OrganizationSerializer(serializers.ModelSerializer):
# 	class Meta:
# 		model = Organization
# 		fields = '__all__'


class LeaderSerializer(serializers.ModelSerializer):
	class Meta:
		model = Leader
		fields = '__all__'


class BranchSerializer(serializers.ModelSerializer):
	class Meta:
		model = Branch
		fields = '__all__'


class PaymentSerializer(serializers.ModelSerializer):
	class Meta:
		model = Payment
		fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = '__all__'

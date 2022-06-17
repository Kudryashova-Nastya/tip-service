from django.db import transaction
from django.http import JsonResponse
from django.utils.datetime_safe import datetime
# from drf_multiple_model.views import ObjectMultipleModelAPIView
from rest_framework import viewsets, status
from rest_framework.parsers import JSONParser
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response

from .serializers import *


# class OrganizationViewSet(viewsets.ModelViewSet):  # crud, patch, head
#     serializer_class = OrganizationSerializer
#     queryset = Organization.objects.all()
#     permission_classes = (IsAuthenticated,)


class LeaderModelViewSet(viewsets.ModelViewSet):  # crud, patch, head
	serializer_class = LeaderSerializer
	# queryset = Leader.objects.all()
	permission_classes = (IsAuthenticated,)

	def list(self, request, *args, **kwargs):
		leader = Leader.objects.get(user=request.user.pk)
		leader_serializer = LeaderSerializer(leader)
		return Response(leader_serializer.data)

	def create(self, request, **kwargs):
		leader_data = JSONParser().parse(request)
		leader_serializer = LeaderSerializer(data=leader_data)
		if leader_serializer.is_valid():
			with transaction.atomic():
				user_for_leader = User.objects.create(
					password=leader_serializer.validated_data['password'],
					username=leader_serializer.validated_data['username'])
				leader_serializer.validated_data['user'] = user_for_leader
				leader_serializer.save()
				return JsonResponse(leader_serializer.data, status=status.HTTP_201_CREATED)
		return JsonResponse(leader_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BranchModelViewSet(viewsets.ModelViewSet):  # crud, patch, head
	serializer_class = BranchSerializer
	queryset = Branch.objects.all()
	permission_classes = (IsAuthenticated,)


class BranchesByLeaderViewSet(viewsets.ModelViewSet):
	serializer_class = BranchSerializer
	permission_classes = (IsAuthenticated,)

	def list(self, request, *args, **kwargs):
		leader = Leader.objects.get(user=request.user.pk)
		branch = Branch.objects.filter(leader=leader.id)
		branch_serializer = BranchSerializer(branch)
		return Response(branch_serializer.data)

	# def get_queryset(self):
	# 	leader = self.kwargs['leader']
	# 	return Branch.objects.filter(leader=leader)


class StaffModelViewSet(viewsets.ModelViewSet):  # crud, patch, head
	serializer_class = StaffSerializer
	queryset = Staff.objects.all()
	permission_classes = (IsAuthenticated,)


class StaffByBranchViewSet(viewsets.ModelViewSet):
	serializer_class = StaffSerializer

	def get_queryset(self):
		branch = self.kwargs['branch']
		return Staff.objects.filter(id_branch=branch)


class PaymentModelViewSet(viewsets.ModelViewSet):  # crud, patch, head
	serializer_class = PaymentSerializer
	queryset = Payment.objects.all()
	permission_classes = (AllowAny,)


class PaymentsByStaffViewSet(viewsets.ModelViewSet):
	serializer_class = PaymentSerializer

	def get_queryset(self):
		staff = self.kwargs['staff']
		return Payment.objects.filter(staff=staff)

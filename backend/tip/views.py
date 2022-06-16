from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from .serializers import *


# class OrganizationViewSet(viewsets.ModelViewSet):  # crud, patch, head
#     serializer_class = OrganizationSerializer
#     queryset = Organization.objects.all()
#     permission_classes = (IsAuthenticated,)


class LeaderModelViewSet(viewsets.ModelViewSet):  # crud, patch, head
	serializer_class = LeaderSerializer
	queryset = Leader.objects.all()
	permission_classes = (IsAuthenticated,)


class BranchModelViewSet(viewsets.ModelViewSet):  # crud, patch, head
	serializer_class = BranchSerializer
	queryset = Branch.objects.all()
	permission_classes = (IsAuthenticated,)


class BranchesByLeaderViewSet(viewsets.ModelViewSet):
	serializer_class = BranchSerializer

	def get_queryset(self):
		leader = self.kwargs['leader']
		return Branch.objects.filter(leader=leader)


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
	permission_classes = (IsAuthenticated,)


class PaymentsByStaffViewSet(viewsets.ModelViewSet):
	serializer_class = PaymentSerializer

	def get_queryset(self):
		staff = self.kwargs['staff']
		return Payment.objects.filter(staff=staff)

from rest_framework import viewsets, permissions
from .models import (
    Staff,
    Payment,
    Organization,
    Leader,
    Branch
)
from .serializers import (
    StaffSerializer,
    PaymentSerializer,
    OrganizationSerializer,
    LeaderSerializer,
    BranchSerializer
)


class StaffViewSet(viewsets.ModelViewSet):
    queryset = Staff.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = StaffSerializer


class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Payment.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PaymentSerializer


class OrganizationViewSet(viewsets.ModelViewSet):
    queryset = Organization.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = OrganizationSerializer


class LeaderViewSet(viewsets.ModelViewSet):
    queryset = Leader.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = LeaderSerializer


class BranchViewSet(viewsets.ModelViewSet):
    queryset = Branch.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = BranchSerializer

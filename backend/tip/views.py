from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from .serializers import *


class OrganizationReadOnly(viewsets.ReadOnlyModelViewSet):  # list, retrieve
    serializer_class = OrganizationSerializer
    queryset = Organization.objects.all()
    permission_classes = (IsAuthenticated,)


class LeaderModelViewSet(viewsets.ModelViewSet):  # crud, patch, head
    serializer_class = LeaderSerializer
    queryset = Leader.objects.all()
    permission_classes = (IsAuthenticated,)


class BranchModelViewSet(viewsets.ModelViewSet):  # crud, patch, head
    serializer_class = BranchSerializer
    queryset = Branch.objects.all()
    permission_classes = (IsAuthenticated,)


class StaffModelViewSet(viewsets.ModelViewSet):  # crud, patch, head
    serializer_class = StaffSerializer
    queryset = Staff.objects.all()
    permission_classes = (IsAuthenticated,)


class PaymentModelViewSet(viewsets.ModelViewSet):  # crud, patch, head
    serializer_class = PaymentSerializer
    queryset = Payment.objects.all()
    permission_classes = (IsAuthenticated,)

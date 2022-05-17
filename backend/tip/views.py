from rest_framework import viewsets

from .serializers import *


class OrganizationReadOnly(viewsets.ReadOnlyModelViewSet):  # list, retrieve
    serializer_class = OrganizationSerializer
    queryset = Organization.objects.all()


class LeaderModelViewSet(viewsets.ModelViewSet):  # crud, patch, head
    serializer_class = LeaderSerializer
    queryset = Leader.objects.all()


class BranchModelViewSet(viewsets.ModelViewSet):  # crud, patch, head
    serializer_class = BranchSerializer
    queryset = Branch.objects.all()


class StaffModelViewSet(viewsets.ModelViewSet):  # crud, patch, head
    serializer_class = StaffSerializer
    queryset = Staff.objects.all()


class PaymentModelViewSet(viewsets.ModelViewSet):  # crud, patch, head
    serializer_class = PaymentSerializer
    queryset = Payment.objects.all()

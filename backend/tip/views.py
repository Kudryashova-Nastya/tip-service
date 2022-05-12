from rest_framework import viewsets

from .serializers import *


class OrganizationReadOnly(viewsets.ReadOnlyModelViewSet):  # list, retrieve
    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer


class LeaderModelViewSet(viewsets.ModelViewSet):  # crud, patch, head
    serializer_class = LeaderSerializer
    queryset = Leader.objects.all()


class BranchModelViewSet(viewsets.ModelViewSet):  # crud, patch, head
    serializer_class = BranchSerializer
    queryset = Branch.objects.all()


class StaffModelViewSet(viewsets.ModelViewSet):  # crud, patch, head
    serializer_class = StaffSerializer
    queryset = Branch.objects.all()


class PaymentModelViewSet(viewsets.ModelViewSet):  # crud, patch, head
    serializer_class = PaymentSerializer
    queryset = Branch.objects.all()

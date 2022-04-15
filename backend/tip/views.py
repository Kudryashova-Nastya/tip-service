from rest_framework import viewsets
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


class StaffViewSet(viewsets.ViewSet):
    queryset = Staff.objects.all()
    serializer = StaffSerializer(queryset, many=True)

    def create(self, request):
        pass

    def retrieve(self, request, pk=None):
        pass

    def update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass


class PaymentViewSet(viewsets.ViewSet):
    queryset = Payment.objects.all()
    serializer = PaymentSerializer(queryset, many=True)

    def create(self, request):
        pass

    def retrieve(self, request, pk=None):
        pass

    def update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass


class OrganizationViewSet(viewsets.ViewSet):
    queryset = Organization.objects.all()
    serializer = OrganizationSerializer(queryset, many=True)

    def create(self, request):
        pass

    def retrieve(self, request, pk=None):
        pass

    def update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass


class LeaderViewSet(viewsets.ViewSet):
    queryset = Leader.objects.all()
    serializer = LeaderSerializer(queryset, many=True)

    def create(self, request):
        pass

    def retrieve(self, request, pk=None):
        pass

    def update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass


class BranchViewSet(viewsets.ViewSet):
    queryset = Branch.objects.all()
    serializer = BranchSerializer(queryset, many=True)

    def create(self, request):
        pass

    def retrieve(self, request, pk=None):
        pass

    def update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass

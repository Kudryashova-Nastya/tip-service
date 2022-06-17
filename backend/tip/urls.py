from django.template.defaulttags import url
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from . import views
from .views import *

urlpatterns = [
    # url(r'registration', LeaderRegistrationView.as_view()),
    # path('registration/', LeaderRegistrationView.as_view(), name='registration')
]

router = DefaultRouter()
router.register('branches_by_leader', BranchesByLeaderViewSet, basename='branches_by_leader')
router.register(r'leader', LeaderModelViewSet, basename='leader')
router.register(r'staff', StaffModelViewSet, basename='staff')
router.register(r'staff_by_branch/(?P<branch>.+)', StaffByBranchViewSet, basename='staff_by_branch')
router.register(r'payment', PaymentModelViewSet, basename='payment')
router.register(r'payment_by_staff/(?P<staff>.+)', PaymentsByStaffViewSet, basename='payment_by_staff')
# router.register(r'organization', OrganizationViewSet, basename='organization')
router.register(r'branch', BranchModelViewSet, basename='branch')
# router.register(r'registration', LeaderRegistrationView, basename='registration')
urlpatterns += router.urls

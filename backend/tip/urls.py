from rest_framework.routers import DefaultRouter
from .views import *

urlpatterns = [
]

router = DefaultRouter()
router.register(r'branches_by_leader/(?P<leader>.+)', BranchesByLeaderViewSet, basename='branches_by_leader')
router.register(r'leader', LeaderModelViewSet, basename='leader')
router.register(r'staff', StaffModelViewSet, basename='staff')
router.register(r'staff_by_branch/(?P<branch>.+)', StaffByBranchViewSet, basename='staff_by_branch')
router.register(r'payment', PaymentModelViewSet, basename='payment')
router.register(r'payment_by_staff/(?P<staff>.+)', PaymentsByStaffViewSet, basename='payment_by_staff')
router.register(r'organization', OrganizationReadOnly, basename='organization')
router.register(r'branch', BranchModelViewSet, basename='branch')
urlpatterns += router.urls

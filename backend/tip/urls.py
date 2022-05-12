from rest_framework.routers import DefaultRouter

from .views import *

urlpatterns = [
	# path('organization/', OrganizationReadOnly.as_view({'get': 'list'})),
	# path('organization/<int:pk>', OrganizationReadOnly.as_view({'get': 'retrieve'})),
]

router = DefaultRouter()
router.register(r'leader', LeaderModelViewSet, basename='leader')
router.register(r'staff', StaffModelViewSet, basename='staff')
router.register(r'payment', PaymentModelViewSet, basename='payment')
router.register(r'organization', OrganizationReadOnly, basename='organization')
router.register(r'branch', BranchModelViewSet, basename='branch')
urlpatterns += router.urls

from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import *

urlpatterns = [
	path('organization/', OrganizationViewSet.as_view({'get': 'list'})),
	path('organization/<int:pk>', OrganizationViewSet.as_view({'get': 'retrieve'})),
]

# router = DefaultRouter()
# router.register(r'organization', OrganizationReadOnly, basename='organization')
# urlpatterns += router.urls

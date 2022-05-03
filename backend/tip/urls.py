from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import *

urlpatterns = [
	path('organization/', OrganizationReadOnly.as_view({'get': 'list'})),
	path('organization/<int:pk>', OrganizationReadOnly.as_view({'get': 'retrieve'})),
]

router = DefaultRouter()
router.register(r'leader', LeaderModelViewSet, basename='leader')
urlpatterns += router.urls

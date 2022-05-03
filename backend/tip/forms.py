from django.contrib.auth.models import User
from django.forms import ModelForm

from .models import Leader


class LeaderModelForm(ModelForm):
	class Meta:
		model = Leader
		fields = ['phone', 'first_name', 'last_name']


class UserModelForm(ModelForm):
	class Meta:
		model = User
		fields = '__all__'

from django.contrib.auth import login, authenticate
from django.contrib.auth.models import Group
from django.http import HttpResponseRedirect
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response

from . import models as m
from .serializers import OrganizationSerializer, LeaderSerializer


# class RegistrationLeaderViewSet(viewsets.ModelViewSet):
#
#     def create(self, request, **kwargs):
#         pass
#
#     def post(self, request, *args, **kwargs):
#         form = RegistrationForm(request.POST or None)
#         if form.is_valid():
#             new_user = form.save(commit=False)
#             new_user.phone = form.cleaned_data['phone']
#             new_user.first_name = form.cleaned_data['first_name']
#             new_user.last_name = form.cleaned_data['last_name']
#             new_user.save()
#             new_user.set_password(form.cleaned_data['password'])
#             new_user.save()
#             m.Leader.objects.create(
#                 user=new_user,
#                 phone=form.cleaned_data['phone'],
#                 first_name=form.cleaned_data['first_name'],
#                 last_name=form.cleaned_data['last_name']
#             )
#             group = Group.objects.get(name='Leader')
#             new_user.groups.add(group)
#             user = authenticate(username=form.cleaned_data['username'], password=form.cleaned_data['password'])
#             login(request, user)
#             return HttpResponseRedirect('/leader')
#         context = {'form': form}
#         return render(request, 'registration.html', context)


class OrganizationReadOnly(viewsets.ReadOnlyModelViewSet):  # GET запрос на все и по id
    queryset = m.Organization.objects.all()
    serializer_class = OrganizationSerializer


class LeaderInfoModelViewSet(viewsets.ModelViewSet):  # полный crud
    serializer_class = LeaderSerializer
    queryset = m.Leader.objects.all()


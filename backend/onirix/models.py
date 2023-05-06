# Create your models here.
from django.contrib.auth.models import User
from django.db import models


class Dream(models.Model):
    description = models.TextField(null=False)
    prediction = models.CharField(max_length=255, null=False)
    id_user = models.ForeignKey(User, on_delete=models.CASCADE)


class AdditionalInfo(models.Model):
    link = models.CharField(max_length=300, null=True)
    title = models.CharField(max_length=255, null=False)
    image = models.CharField(max_length=300, null=True)
    type = models.CharField(max_length=10, null=False)
    id_dream = models.ForeignKey(Dream, on_delete=models.CASCADE)

from django.urls import path
from rest_framework.authtoken import views

from onirix.views import UserView, DreamView, History

urlpatterns = [
    path("user", UserView.as_view()),
    path("user/login", views.obtain_auth_token),
    path("user/predict", DreamView.as_view()),
    path("user/history", History.as_view())
]
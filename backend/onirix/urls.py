from django.urls import path
from rest_framework.authtoken import views

from onirix.views import UserView, DreamView

urlpatterns = [
    path("user", UserView.as_view()),
    path("user/login", views.obtain_auth_token),
    path("predict", DreamView.as_view())
]
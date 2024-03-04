from django.urls import path
from . import views

urlpatterns = [
    path("api/hello", views.Index.as_view(), name="Index"),
]

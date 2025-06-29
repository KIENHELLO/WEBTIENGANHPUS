from django.urls import path
from .views import generate_test

urlpatterns = [
    path('', generate_test),  # ✅ Đúng rồi!
]

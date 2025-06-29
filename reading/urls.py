from django.urls import path
from .views import get_random_readings, submit_reading_test

urlpatterns = [
    path('reading/random/', get_random_readings),
    path('reading/submit/', submit_reading_test),
]

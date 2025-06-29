from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import WritingSubmissionViewSet

router = DefaultRouter()
router.register(r'writing', WritingSubmissionViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

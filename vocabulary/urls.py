from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import WordViewSet, random_quiz

router = DefaultRouter()
router.register(r'words', WordViewSet, basename='word')

urlpatterns = [
    path('', include(router.urls)),
    path('quiz/', random_quiz),  # <- thêm dòng này
]

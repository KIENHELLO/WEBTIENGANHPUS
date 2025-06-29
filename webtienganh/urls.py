from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/vocabulary/', include('vocabulary.urls')),
    path('api/reading/', include('reading.urls')),
    path('api/writing/', include('writing.urls')),
    path('api/testcenters/', include('testcenter.urls')),
    path('api/auth/', include('users.urls')),
]

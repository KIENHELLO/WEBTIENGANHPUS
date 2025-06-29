#from django.contrib import admin
##urlpatterns = [
   ### path('api/reading/', include('reading.urls')),
    ####]

from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/vocabulary/', include('vocabulary.urls')),
    path('api/reading/', include('reading.urls')),
    path('api/writing/', include('writing.urls')),
    path('api/testcenters/', include('testcenter.urls')),
    path('api/auth/', include('users.urls')),

    # Route tất cả các đường dẫn khác về React
    re_path(r'^.*$', TemplateView.as_view(template_name='index.html')),
]

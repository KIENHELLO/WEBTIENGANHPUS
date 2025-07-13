# webtienganh/urls.py

#from django.contrib import admin
#from django.urls import path, include, re_path
#from .views import FrontendAppView  # ← dòng này quan trọng

#urlpatterns = [
 #   path('admin/', admin.site.urls),
  #  path('api/vocabulary/', include('vocabulary.urls')),
   # path('api/reading/', include('reading.urls')),
    #path('api/writing/', include('writing.urls')),
    #path('api/testcenters/', include('testcenter.urls')),
    #path('api/auth/', include('users.urls')),
    #path('', lambda request: JsonResponse({'status': 'ok'})),
    # Trả về index.html cho các route frontend
    #path('', TemplateView.as_view(template_name='index.html')),
    #re_path(r'^.*$', FrontendAppView.as_view()),  # ← dòng này sẽ xử lý mọi route còn lại
#]
from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # API routes
    path('api/vocabulary/', include('vocabulary.urls')),
    path('api/reading/', include('reading.urls')),
    path('api/writing/', include('writing.urls')),
    path('api/testcenters/', include('testcenter.urls')),
    path('api/auth/', include('users.urls')),

    # Serve React index.html for all frontend routes
    re_path(r'^.*$', TemplateView.as_view(template_name='index.html')),
]



# webtienganh/views.py

import os
from django.views.generic import View
from django.http import HttpResponse

class FrontendAppView(View):
    def get(self, request):
        try:
            with open(os.path.join('front_end', 'build', 'index.html')) as f:
                return HttpResponse(f.read())
        except FileNotFoundError:
            return HttpResponse("index.html not found!", status=501)

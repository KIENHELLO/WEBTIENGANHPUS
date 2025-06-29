from django.contrib import admin
from .models import Word

class WordAdmin(admin.ModelAdmin):
    list_display = ('term', 'definition', 'example')  # Cột hiển thị trong admin list
    search_fields = ('term', 'definition')            # Cho phép tìm kiếm

admin.site.register(Word, WordAdmin)

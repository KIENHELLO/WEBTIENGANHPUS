from django.contrib import admin
from .models import WritingSubmission

class WritingSubmissionAdmin(admin.ModelAdmin):
    list_display = ('title', 'submitted_at', 'score')
    search_fields = ('title', 'content')
    list_filter = ('submitted_at',)

admin.site.register(WritingSubmission, WritingSubmissionAdmin)

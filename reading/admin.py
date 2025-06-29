from django.contrib import admin
from .models import ReadingPassage, Question, Choice

class ChoiceInline(admin.TabularInline):
    model = Choice
    extra = 2

class QuestionInline(admin.TabularInline):
    model = Question
    extra = 1

class ReadingPassageAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at')
    search_fields = ('title', 'content')
    inlines = [QuestionInline]

class QuestionAdmin(admin.ModelAdmin):
    list_display = ('question_text', 'passage')
    search_fields = ('question_text',)
    inlines = [ChoiceInline]

class ChoiceAdmin(admin.ModelAdmin):
    list_display = ('choice_text', 'question', 'is_correct')
    list_filter = ('is_correct',)

admin.site.register(ReadingPassage, ReadingPassageAdmin)
admin.site.register(Question, QuestionAdmin)
admin.site.register(Choice, ChoiceAdmin)

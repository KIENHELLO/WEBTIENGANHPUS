from rest_framework import serializers
from .models import WritingSubmission

class WritingSubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = WritingSubmission
        fields = '__all__'

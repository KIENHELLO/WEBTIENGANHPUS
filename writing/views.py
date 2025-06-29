from rest_framework import viewsets
from .models import WritingSubmission
from .serializers import WritingSubmissionSerializer

class WritingSubmissionViewSet(viewsets.ModelViewSet):
    queryset = WritingSubmission.objects.all().order_by('-submitted_at')
    serializer_class = WritingSubmissionSerializer

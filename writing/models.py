from django.db import models

class WritingSubmission(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    submitted_at = models.DateTimeField(auto_now_add=True)
    
    # Optional - cho bước sau
    score = models.FloatField(null=True, blank=True)
    feedback = models.TextField(blank=True)

    def __str__(self):
        return self.title

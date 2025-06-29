from django.db import models

class Word(models.Model):
    term = models.CharField(max_length=100)  # từ cần tra
    definition = models.TextField()          # nghĩa của từ
    example = models.TextField(blank=True)   # ví dụ dùng từ (tuỳ chọn)

    def __str__(self):
        return self.term

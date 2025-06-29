# import_words_csv.py

import os
import django
import csv

# Kích hoạt môi trường Django
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "webtienganh.settings")
django.setup()

from vocabulary.models import Word

with open("words_500_dataset.csv", newline='', encoding='utf-8') as csvfile:
    reader = csv.DictReader(csvfile)
    count = 0
    for row in reader:
        word, created = Word.objects.get_or_create(
            term=row['term'],
            defaults={
                'definition': row['definition'],
                'example': row['example']
            }
        )
        if created:
            count += 1

print(f"✅ Đã import {count} từ vựng vào cơ sở dữ liệu.")

import os
import django
import json

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "webtienganh.settings")
django.setup()

from reading.models import ReadingPassage, Question, Choice

with open("reading_data.json", "r", encoding="utf-8") as f:
    data = json.load(f)

count = 0
for item in data:
    passage = ReadingPassage.objects.create(
        title=item["title"],
        content=item["passage"]
    )

    for q in item["questions"]:
        question = Question.objects.create(
            passage=passage,
            question_text=q["question"]
        )

        correct_answer = q["answer"]

        for label, text in q["options"].items():
            Choice.objects.create(
                question=question,
                choice_text=text,
                is_correct=(label == correct_answer)
            )
    count += 1

print(f"✅ Đã import {count} bài đọc thành công!")

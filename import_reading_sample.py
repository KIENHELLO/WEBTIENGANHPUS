import os
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "webtienganh.settings")
django.setup()

from reading.models import ReadingPassage, Question, Choice

# 1. Tạo bài đọc
passage = ReadingPassage.objects.create(
    title="The Sun",
    content="The sun is the closest star to Earth. It gives us light and heat. Without the sun, there would be no life."
)

# 2. Câu hỏi 1
q1 = Question.objects.create(
    passage=passage,
    question_text="What is the sun?"
)
Choice.objects.bulk_create([
    Choice(question=q1, choice_text="A planet", is_correct=False),
    Choice(question=q1, choice_text="A star", is_correct=True),
    Choice(question=q1, choice_text="A moon", is_correct=False),
    Choice(question=q1, choice_text="A cloud", is_correct=False),
])

# 3. Câu hỏi 2
q2 = Question.objects.create(
    passage=passage,
    question_text="What does the sun give us?"
)
Choice.objects.bulk_create([
    Choice(question=q2, choice_text="Rain and wind", is_correct=False),
    Choice(question=q2, choice_text="Snow and ice", is_correct=False),
    Choice(question=q2, choice_text="Light and heat", is_correct=True),
    Choice(question=q2, choice_text="Darkness and cold", is_correct=False),
])

print("✅ Đã tạo bài đọc mẫu thành công!")


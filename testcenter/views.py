import random
from rest_framework.decorators import api_view
from reading.models import ReadingPassage
from vocabulary.models import Word
from reading.serializers import ReadingPassageSerializer
from vocabulary.serializers import WordSerializer
from rest_framework.response import Response

@api_view(['GET'])
def generate_test(request):
    # Lấy 3 bài đọc ngẫu nhiên
    all_readings = list(ReadingPassage.objects.all())
    reading_samples = random.sample(all_readings, min(3, len(all_readings)))
    reading_data = ReadingPassageSerializer(reading_samples, many=True).data

    # Lấy 5 từ vựng ngẫu nhiên
    all_words = list(Word.objects.all())
    word_samples = random.sample(all_words, min(5, len(all_words)))
    vocab_data = WordSerializer(word_samples, many=True).data

    # Câu hỏi viết
    writing_prompt = "Write an essay about the impact of technology on education."

    return Response({
        "reading": reading_data,
        "vocabulary": vocab_data,
        "writing_prompt": writing_prompt
    })

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import random

from .models import ReadingPassage, Choice, Question
from .serializers import ReadingPassageSerializer

@api_view(['GET'])
def get_random_readings(request):
    all_passages = list(ReadingPassage.objects.all())
    selected = random.sample(all_passages, min(5, len(all_passages)))
    serializer = ReadingPassageSerializer(selected, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def submit_reading_test(request):
    answers = request.data
    total = len(answers)
    correct = 0

    for ans in answers:
        try:
            choice = Choice.objects.get(id=ans['selected_choice_id'])
            if choice.is_correct:
                correct += 1
        except:
            continue

    return Response({
        "total": total,
        "correct": correct,
        "score_percent": round(correct / total * 100, 2)
    }, status=status.HTTP_200_OK)

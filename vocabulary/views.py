from rest_framework import viewsets, filters
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Word
from .serializers import WordSerializer
import random


class WordViewSet(viewsets.ModelViewSet):
    queryset = Word.objects.all()
    serializer_class = WordSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['term', 'definition', 'example']


@api_view(['GET'])
def random_quiz(request):
    words = list(Word.objects.all())
    if len(words) < 4:
        return Response({"error": "Not enough words to generate quiz."}, status=400)

    sample = random.sample(words, min(5, len(words)))
    result = []

    for word in sample:
        wrong_choices = [w.definition for w in words if w.id != word.id]
        if len(wrong_choices) >= 3:
            wrong = random.sample(wrong_choices, 3)
        else:
            wrong = wrong_choices

        options = wrong + [word.definition]
        random.shuffle(options)

        result.append({
            "term": word.term,
            "options": options,
            "correctIndex": options.index(word.definition)
        })

    return Response(result)

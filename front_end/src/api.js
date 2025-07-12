import axios from 'axios'; // ← DÒNG NÀY BẮT BUỘC PHẢI CÓ ĐẦU TIÊN

const API = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/vocabulary/', // hoặc 'http://localhost:8000'
});

export const getWords = () => API.get('words/');

export const getVocabularyQuiz = () => API.get('/vocabulary/quiz/');

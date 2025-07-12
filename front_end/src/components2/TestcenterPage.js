import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './TestcenterPage.css';

const TestcenterPage = () => {
    const navigate = useNavigate();
    const [testStarted, setTestStarted] = useState(false);
    const [currentSection, setCurrentSection] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [timeLeft, setTimeLeft] = useState(1800);
    const [score, setScore] = useState(null);
    const [fullTestQuestions, setFullTestQuestions] = useState([]);
    const [loading, setLoading] = useState(false);

    const testData = useMemo(() => ({
        grammar: [
            {
                id: 1,
                question: "Chọn đáp án đúng: She ___ to school every day.",
                options: ["go", "goes", "going", "gone"],
                correct: 1
            },
            {
                id: 2,
                question: "Câu nào sau đây đúng ngữ pháp?",
                options: [
                    "He don't like apples.",
                    "He doesn't likes apples.",
                    "He doesn't like apples.",
                    "He not like apples."
                ],
                correct: 2
            }
        ],
        reading: [
            {
                id: 5,
                passage: "The quick brown fox jumps over the lazy dog. This sentence contains all the letters in the English alphabet.",
                questions: [
                    {
                        id: 6,
                        question: "What does the fox jump over?",
                        options: ["The fence", "The lazy dog", "The river", "The wall"],
                        correct: 1
                    },
                    {
                        id: 7,
                        question: "What is special about this sentence?",
                        options: [
                            "It's very long",
                            "It contains all alphabet letters",
                            "It's a famous quote",
                            "It's hard to understand"
                        ],
                        correct: 1
                    }
                ]
            }
        ]
    }), []);

    const startTest = async (section) => {
        setLoading(true);
        try {
            if (section === "full") {
                const allQuestions = [
                    ...testData.grammar,
                    ...fullTestQuestions, // phần từ vựng nếu đã gọi
                    ...testData.reading[0].questions.map(q => ({
                        ...q,
                        passage: testData.reading[0].passage
                    }))
                ];
                setFullTestQuestions(allQuestions);
            } else if (section === "vocabulary") {
                const res = await axios.get("http://localhost:8000/api/vocabulary/quiz/");
                const vocabQuestions = res.data.map((item, index) => ({
                    id: 300 + index,
                    question: `Nghĩa của từ "${item.term}" là gì?`,
                    options: item.options,
                    correct: item.correctIndex
                }));
                setFullTestQuestions(vocabQuestions);
            } else {
                setFullTestQuestions([]);
            }

            setTestStarted(true);
            setCurrentSection(section);
            setCurrentQuestion(0);
            setAnswers({});
            setScore(null);
            setTimeLeft(section === 'full' ? 1800 : section === 'reading' ? 600 : 900);
        } catch (error) {
            alert("Lỗi khi gọi API test.");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleAnswerSelect = (questionId, answerIndex) => {
        if (!testStarted || score) return;
        setAnswers(prev => ({
            ...prev,
            [questionId]: answerIndex
        }));
    };

    const getCurrentQuestions = () => {
        if (!currentSection) return [];

        if (currentSection === 'reading') {
            return testData.reading[0]?.questions || [];
        } else if (currentSection === 'vocabulary') {
            return fullTestQuestions;
        } else if (currentSection === 'full') {
            return fullTestQuestions;
        } else {
            return testData[currentSection] || [];
        }
    };

    const goToNextQuestion = () => {
        const questions = getCurrentQuestions();
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            finishSection();
        }
    };

    const finishSection = () => {
        calculateScore();
        setCurrentSection(null);
        setCurrentQuestion(0);
    };

    const calculateScore = () => {
        const questions = getCurrentQuestions();
        let correct = 0;
        questions.forEach(q => {
            if (answers[q.id] === q.correct) correct++;
        });
        setScore({
            correct,
            total: questions.length,
            percentage: Math.round((correct / questions.length) * 100)
        });
    };

    useEffect(() => {
        let timer;
        if (testStarted && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft(prev => prev - 1);
            }, 1000);
        } else if (testStarted && timeLeft === 0) {
            finishSection();
        }
        return () => clearInterval(timer);
    }, [testStarted, timeLeft]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const renderCurrentQuestion = () => {
        const questions = getCurrentQuestions();
        const question = questions[currentQuestion];

        if (!question) return <div className="error-message">Không tìm thấy câu hỏi</div>;

        return (
            <div className="question-container">
                {question.passage && <div className="passage">{question.passage}</div>}
                <h3>Câu hỏi {currentQuestion + 1}: {question.question}</h3>
                <div className="options">
                    {question.options.map((option, index) => (
                        <button
                            key={index}
                            className={`option ${answers[question.id] === index ? 'selected' : ''}`}
                            onClick={() => handleAnswerSelect(question.id, index)}
                            disabled={!!score}
                        >
                            {option}
                            {score && index === question.correct && (
                                <span className="correct-answer"> ✓</span>
                            )}
                            {score && answers[question.id] === index && index !== question.correct && (
                                <span className="wrong-answer"> ✗</span>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        );
    };

    const renderResults = () => {
        if (!score) return null;
        const getResultLevel = () => {
            if (score.percentage >= 80) return 'excellent';
            if (score.percentage >= 50) return 'good';
            return 'poor';
        };

        return (
            <div className={`results ${getResultLevel()}`}>
                <h2>Kết quả phần {
                    currentSection === 'grammar' ? 'Ngữ pháp' :
                    currentSection === 'vocabulary' ? 'Từ vựng' :
                    currentSection === 'reading' ? 'Đọc hiểu' : 'Tổng hợp'}
                </h2>
                <p>Bạn đã trả lời đúng {score.correct}/{score.total} câu</p>
                <p>Tỉ lệ đúng: {score.percentage}%</p>
                <button className="btn-continue" onClick={() => {
                    setScore(null);
                    setTestStarted(false);
                }}>
                    ←Back to Home
                </button>
            </div>
        );
    };

    if (loading) {
        return <div className="loading-screen">Đang tải bài kiểm tra...</div>;
    }

    if (!testStarted) {
        return (
            <div className="testcenter-page">
                <button onClick={() => navigate('/dashboard')} className="MainPage">
                    ← Back to Home
                </button>
                <header className="page-header">
                    <h2>Trung tâm Kiểm tra</h2>
                    <p>Chọn loại bài kiểm tra bạn muốn làm</p>
                </header>

                <div className="test-options">
                    <div className="test-card" onClick={() => startTest('grammar')}>
                        <h3>Kiểm tra Ngữ pháp</h3>
                        <p>2 câu - 15 phút</p>
                    </div>
                    <div className="test-card" onClick={() => startTest('vocabulary')}>
                        <h3>Kiểm tra Từ vựng</h3>
                        <p>5 câu - 15 phút</p>
                    </div>
                    <div className="test-card" onClick={() => startTest('reading')}>
                        <h3>Kiểm tra Đọc hiểu</h3>
                        <p>1 bài đọc - 10 phút</p>
                    </div>
                    <div className="test-card full-test" onClick={() => startTest('full')}>
                        <h3>Bài kiểm tra Tổng hợp</h3>
                        <p>Tất cả phần - 30 phút</p>
                    </div>
                </div>
            </div>
        );
    }

    const questions = getCurrentQuestions();
    const totalQuestions = questions.length;

    return (
        <div className="testcenter-page">
            <div className="test-header">
                <h2>
                    {currentSection === 'grammar' ? 'Kiểm tra Ngữ pháp' :
                        currentSection === 'vocabulary' ? 'Kiểm tra Từ vựng' :
                        currentSection === 'reading' ? 'Kiểm tra Đọc hiểu' : 'Kiểm tra Tổng hợp'}
                </h2>
                <div className="timer">{formatTime(timeLeft)}</div>
            </div>

            <div className="progress-indicator">
                Câu {currentQuestion + 1}/{totalQuestions}
            </div>

            {score ? renderResults() : renderCurrentQuestion()}

            {!score && (
                <div className="navigation-buttons">
                    <button className="btn-next" onClick={goToNextQuestion}>
                        {currentQuestion + 1 === totalQuestions ? 'Kết thúc' : 'Câu tiếp theo'}
                    </button>
                    <button onClick={() => {
                        if (testStarted && !score && Object.keys(answers).length > 0) {
                            if (window.confirm('Bạn có chắc muốn thoát? Tiến trình làm bài sẽ không được lưu.')) {
                                navigate('/dashboard');
                            }
                        } else {
                            navigate('/dashboard');
                        }
                    }} className="MainPage">
                        ← Back to Home
                    </button>
                </div>
            )}
        </div>
    );
};

export default TestcenterPage;

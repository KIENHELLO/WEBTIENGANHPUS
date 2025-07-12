import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ReadingPage.css';

const ReadingPage = () => {
    const navigate = useNavigate();
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [activeQuestion, setActiveQuestion] = useState(0);

    const readingData = {
        passage: "The way mental function changes is largely determined by three factors: mental lifestyle, the impact of diseases, and the effects of aging. Research shows that older typists perform as well as younger ones because they use different motor skills. Experiments with rats demonstrated that their brains physically changed size based on mental activity levels.",
        questions: [
            {
                id: 1,
                question: "What does the writer say about the performance of older typists?",
                options: [
                    "They used different motor skills from younger typists.",
                    "They had been more efficiently trained than younger typists.",
                    "They used more time-saving techniques than younger typists.",
                    "They had better concentration skills than younger typists."
                ],
                correctAnswer: 0
            },
            {
                id: 2,
                question: "The experiment with the rats showed that",
                options: [
                    "brain structure only changed when given a familiar toy.",
                    "the rats became anxious after prolonged isolation.",
                    "the rats lived longer in social groups.",
                    "their brains changed size based on mental activity."
                ],
                correctAnswer: 3
            },
            {
                id: 3,
                question: "What mainly determines mental function changes?",
                options: [
                    "Genetic factors only",
                    "Mental lifestyle, diseases, and aging",
                    "Physical exercise and diet",
                    "Social relationships"
                ],
                correctAnswer: 1
            }
        ]
    };

    const handleAnswerSelect = (questionId, optionIndex) => {
        if (!submitted) {
            setAnswers({
                ...answers,
                [questionId]: optionIndex
            });
        }
    };

    const calculateScore = () => {
        return readingData.questions.filter(
            q => answers[q.id] === q.correctAnswer
        ).length;
    };

    const handleSubmit = () => {
        if (Object.keys(answers).length === readingData.questions.length) {
            setSubmitted(true);
        }
    };

    const resetTest = () => {
        setAnswers({});
        setSubmitted(false);
        setActiveQuestion(0);
    };

    const getResultVariant = () => {
        const score = calculateScore();
        const percentage = (score / readingData.questions.length) * 100;

        if (percentage >= 80) return 'excellent';
        if (percentage >= 50) return 'good';
        return 'needs-improvement';
    };

    return (
        <div className="reading-container">
            <div className="header-section">
                <button
                    onClick={() => navigate('/dashboard')}
                    className="MainPage"
                >
                    ← Back to Home
                </button>
                <h1 className="test-title">
                    <span className="title-icon">📖</span> Reading Comprehension Test
                </h1>
                <p className="test-instructions">
                    Read the passage carefully and answer all questions.
                </p>
            </div>

            <div className="content-wrapper">
                <div className="passage-section glassmorphism-card">
                    <h2 className="section-title">
                        <span className="icon">✍️</span> Reading Passage
                    </h2>
                    <div className="passage-content">
                        {readingData.passage}
                    </div>
                </div>

                <div className="questions-section">
                    <div className="progress-indicator">
                        Question {activeQuestion + 1} of {readingData.questions.length}
                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{
                                    width: `${((activeQuestion + 1) / readingData.questions.length) * 100}%`
                                }}
                            ></div>
                        </div>
                    </div>

                    <div className="questions-wrapper">
                        {readingData.questions.map((q, idx) => (
                            <div
                                key={q.id}
                                className={`question-card ${idx === activeQuestion ? 'active' : ''}`}
                                onClick={() => setActiveQuestion(idx)}
                            >
                                <h3 className="question-text">Q{q.id}: {q.question}</h3>
                                <div className="options-grid">
                                    {q.options.map((option, optIdx) => (
                                        <div
                                            key={optIdx}
                                            className={`option 
                        ${answers[q.id] === optIdx ? 'selected' : ''}
                        ${submitted && optIdx === q.correctAnswer ? 'correct' : ''}
                        ${submitted && answers[q.id] === optIdx && optIdx !== q.correctAnswer ? 'incorrect' : ''}
                      `}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleAnswerSelect(q.id, optIdx);
                                            }}
                                        >
                                            <span className="option-letter">
                                                {String.fromCharCode(65 + optIdx)}.
                                            </span>
                                            <span className="option-text">{option}</span>
                                            {submitted && optIdx === q.correctAnswer && (
                                                <span className="feedback-icon correct">✓</span>
                                            )}
                                            {submitted && answers[q.id] === optIdx && optIdx !== q.correctAnswer && (
                                                <span className="feedback-icon incorrect">✗</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="navigation-buttons">
                        {activeQuestion > 0 && (
                            <button
                                className="nav-button prev-button"
                                onClick={() => setActiveQuestion(prev => prev - 1)}
                            >
                                ← Previous
                            </button>
                        )}

                        {activeQuestion < readingData.questions.length - 1 ? (
                            <button
                                className="nav-button next-button"
                                onClick={() => setActiveQuestion(prev => prev + 1)}
                                disabled={answers[readingData.questions[activeQuestion + 1].id] === undefined}
                            >
                                Next →
                            </button>
                        ) : (
                            !submitted && (
                                <button
                                    className={`submit-button ${Object.keys(answers).length === readingData.questions.length ? 'active' : ''}`}
                                    onClick={handleSubmit}
                                    disabled={Object.keys(answers).length !== readingData.questions.length}
                                >
                                    Submit Answers
                                </button>
                            )
                        )}
                    </div>
                </div>
            </div>

            {submitted && (
                <div className={`result-overlay ${getResultVariant()}`}>
                    <div className="result-content">
                        <h2>Test Results</h2>
                        <div className="score-display">
                            You scored: <span className="score">{calculateScore()}</span> / {readingData.questions.length}
                        </div>
                        <div className="result-message">
                            {getResultVariant() === 'excellent' && '🎉 Excellent work! Keep it up!'}
                            {getResultVariant() === 'good' && '👍 Good job! You can do even better!'}
                            {getResultVariant() === 'needs-improvement' && '💪 Keep practicing! You\'ll improve!'}
                        </div>
                        <button
                            onClick={resetTest}
                            className="retry-button"
                        >
                            Try Again
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ReadingPage;
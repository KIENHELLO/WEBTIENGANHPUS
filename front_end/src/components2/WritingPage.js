import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './WritingPage.css';

const WritingPage = () => {
    const writingPrompts = [
        "Describe your favorite holiday destination and why you love it",
        "Discuss the advantages and disadvantages of social media",
        "Write about a person who has influenced you the most",
        "Should school uniforms be mandatory? Give your opinion",
        "Describe how technology has changed our lives in the past decade"
    ];

    const [currentPrompt, setCurrentPrompt] = useState('');
    const [userWriting, setUserWriting] = useState('');
    const [feedback, setFeedback] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // Hàm phân tích câu
    const analyzeSentenceStructure = (text) => {
        const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
        let structureFeedback = [];
        let score = 0;

        sentences.forEach((sentence, index) => {
            const words = sentence.trim().split(/\s+/);
            const wordCount = words.length;

            // Kiểm tra câu quá ngắn/dài
            if (wordCount < 5) {
                structureFeedback.push(`Câu #${index + 1}: Quá ngắn (${wordCount} từ)`);
                score -= 2;
            } else if (wordCount > 25) {
                structureFeedback.push(`Câu #${index + 1}: Quá dài (${wordCount} từ)`);
                score -= 2;
            } else {
                score += 3;
            }

            // Kiểm tra chữ cái đầu câu viết hoa
            if (words[0] && words[0][0] !== words[0][0].toUpperCase()) {
                structureFeedback.push(`Câu #${index + 1}: Thiếu viết hoa đầu câu`);
                score -= 1;
            }
        });

        return { feedback: structureFeedback, score: Math.max(0, score) };
    };

    // Hàm kiểm tra ngữ pháp cơ bản
    const checkGrammar = (text) => {
        const commonMistakes = {
            ' i ': ' I ',
            ' dont ': ' don\'t ',
            ' cant ': ' can\'t ',
            ' its ': ' it\'s ',
        };

        let grammarFeedback = [];
        let score = 10; // Điểm cơ bản

        // Kiểm tra lỗi phổ biến
        Object.entries(commonMistakes).forEach(([wrong, correct]) => {
            if (text.toLowerCase().includes(wrong)) {
                grammarFeedback.push(`Phát hiện lỗi: "${wrong.trim()}" → "${correct.trim()}"`);
                score -= 1;
            }
        });

        // Kiểm tra a/an
        const aAnErrors = text.match(/\b(a|an)\s+[aeiouAEIOU]/g);
        if (aAnErrors) {
            grammarFeedback.push(`Lỗi dùng mạo từ: ${aAnErrors.join(', ')}`);
            score -= 1;
        }

        return { feedback: grammarFeedback, score: Math.max(0, score) };
    };

    // Hàm đánh giá tổng thể
    const evaluateWriting = () => {
        setIsLoading(true);

        setTimeout(() => {
            const wordCount = userWriting.trim().split(/\s+/).length;

            // Phân tích cấu trúc
            const structureAnalysis = analyzeSentenceStructure(userWriting);

            // Kiểm tra ngữ pháp
            const grammarAnalysis = checkGrammar(userWriting);

            // Tính điểm tổng (tối đa 100)
            const structureScore = Math.min(30, structureAnalysis.score * 3);
            const grammarScore = Math.min(40, grammarAnalysis.score * 4);
            const lengthScore = Math.min(30, Math.floor(wordCount / 5)); // 1 điểm mỗi 5 từ

            const totalScore = structureScore + grammarScore + lengthScore;

            // Tạo phản hồi
            setFeedback({
                score: totalScore,
                wordCount,
                grammar: grammarAnalysis.feedback.length > 0
                    ? grammarAnalysis.feedback
                    : ['Không phát hiện lỗi ngữ pháp nghiêm trọng'],
                structure: structureAnalysis.feedback.length > 0
                    ? structureAnalysis.feedback
                    : ['Cấu trúc câu hợp lý'],
                suggestions: [
                    wordCount < 50 ? 'Bài viết khá ngắn, cần phát triển thêm ý' : '',
                    'Nên sử dụng đa dạng cấu trúc câu phức/tghức hợp',
                    'Kiểm tra lại các dấu câu'
                ].filter(s => s)
            });

            setIsLoading(false);
        }, 1500);
    };

    const getRandomPrompt = () => {
        const randomIndex = Math.floor(Math.random() * writingPrompts.length);
        setCurrentPrompt(writingPrompts[randomIndex]);
        setUserWriting('');
        setFeedback(null);
    };

    return (
        <div className="writing-page">
            <div className="writing-header">
                <h2>Writing Practice</h2>
                <Link to="/dashboard" className="MainPage">← Back to Home</Link>
            </div>

            <div className="writing-container">
                <div className="prompt-section">
                    <h3>Đề bài:</h3>
                    <div className="prompt-box">
                        {currentPrompt || "Nhấn nút để nhận đề bài ngẫu nhiên"}
                    </div>
                    <button
                        onClick={getRandomPrompt}
                        className="prompt-button"
                    >
                        Lấy đề ngẫu nhiên
                    </button>
                </div>

                <div className="writing-area">
                    <h3>Bài viết của bạn:</h3>
                    <textarea
                        value={userWriting}
                        onChange={(e) => setUserWriting(e.target.value)}
                        placeholder="Viết bài của bạn ở đây..."
                        disabled={!currentPrompt}
                    />
                    <div className="action-buttons">
                        <button
                            onClick={evaluateWriting}
                            disabled={!userWriting || isLoading}
                            className="evaluate-button"
                        >
                            {isLoading ? 'Đang chấm...' : 'Chấm bài'}
                        </button>
                        <span className="word-count">
                            Số từ: {userWriting ? userWriting.trim().split(/\s+/).length : 0}
                        </span>
                    </div>

                    {feedback && (
                        <div className="feedback-section">
                            <h3>Phân tích chi tiết:</h3>
                            <div className="score-box">
                                Điểm: <span>{feedback.score}/100</span> • Số từ: {feedback.wordCount}
                            </div>

                            <div className="feedback-grid">
                                <div className="feedback-card">
                                    <h4>📝 Ngữ pháp</h4>
                                    <ul>
                                        {feedback.grammar.map((item, i) => (
                                            <li key={`grammar-${i}`}>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="feedback-card">
                                    <h4>🧩 Cấu trúc</h4>
                                    <ul>
                                        {feedback.structure.map((item, i) => (
                                            <li key={`structure-${i}`}>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="feedback-card">
                                    <h4>💡 Gợi ý</h4>
                                    <ul>
                                        {feedback.suggestions.map((item, i) => (
                                            <li key={`suggestion-${i}`}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WritingPage;
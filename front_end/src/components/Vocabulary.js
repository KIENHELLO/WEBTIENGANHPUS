import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Vocabulary.css';

function VocabularyPage() {
    const navigate = useNavigate();

    const handleGoToLogin = () => {
        navigate('/login');
    };

    return (
        <div className="vocab-container">
            <div className="vocab-hero">
                <h1>📚 Vocabulary Mastery</h1>
                <p>Boost your English vocabulary with thematic word sets, collocations, idioms, and interactive games.</p>
            </div>

            <div className="vocab-section">
                <h2>🔤 Learn by Topic</h2>
                <div className="vocab-grid">
                    <div className="vocab-card">
                        <h3>🌍 Travel & Tourism</h3>
                        <p>Essential words for trips, transport, and global adventures.</p>
                        <button onClick={handleGoToLogin}>Start Learning</button>
                    </div>
                    <div className="vocab-card">
                        <h3>🏢 Business English</h3>
                        <p>Key terms for meetings, presentations, and emails.</p>
                        <button onClick={handleGoToLogin}>Start Learning</button>
                    </div>
                    <div className="vocab-card">
                        <h3>👨‍⚕️ Health & Medicine</h3>
                        <p>Useful words for visiting the doctor or reading reports.</p>
                        <button onClick={handleGoToLogin}>Start Learning</button>
                    </div>
                </div>
            </div>

            <div className="vocab-section">
                <h2>🧠 Word Skills</h2>
                <div className="vocab-grid">
                    <div className="vocab-card">
                        <h3>🔧 Collocations</h3>
                        <p>Common word combinations for fluent communication.</p>
                        <button onClick={handleGoToLogin}>Practice Now</button>
                    </div>
                    <div className="vocab-card">
                        <h3>💬 Phrasal Verbs</h3>
                        <p>Understand and use everyday expressions naturally.</p>
                        <button onClick={handleGoToLogin}>Practice Now</button>
                    </div>
                    <div className="vocab-card">
                        <h3>🧩 Idioms</h3>
                        <p>Master English idioms with fun examples and quizzes.</p>
                        <button onClick={handleGoToLogin}>Practice Now</button>
                    </div>
                </div>
            </div>

            <div className="vocab-section">
                <h2>🎮 Games & Practice</h2>
                <div className="vocab-grid">
                    <div className="vocab-card">
                        <h3>📝 Vocabulary Quizzes</h3>
                        <p>Test your knowledge with multiple-choice and fill-in-the-blank quizzes.</p>
                        <button onClick={handleGoToLogin}>Start Quiz</button>
                    </div>
                    <div className="vocab-card">
                        <h3>🃏 Flashcards</h3>
                        <p>Review vocabulary interactively using flashcards.</p>
                        <button onClick={handleGoToLogin}>Try Flashcards</button>
                    </div>
                    <div className="vocab-card">
                        <h3>🎯 Word Games</h3>
                        <p>Play games like Word Match and Hangman to reinforce learning.</p>
                        <button onClick={handleGoToLogin}>Play Game</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VocabularyPage;

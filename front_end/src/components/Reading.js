import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Reading.css';

function ReadingPage() {
    const navigate = useNavigate();

    const handleStartPractice = () => {
        navigate('/login');
    };

    return (
        <div className="reading-container">
            <div className="reading-hero">
                <h1>📖 Reading Mastery</h1>
                <p>Improve your English reading skills with curated articles, comprehension exercises, and speed reading techniques.</p>
            </div>

            <div className="reading-section">
                <h2>📰 Reading Materials</h2>
                <div className="reading-grid">
                    <div className="reading-card">
                        <h3>🌎 News Articles</h3>
                        <p>Current news from reputable sources with vocabulary support.</p>
                        <button onClick={handleStartPractice}>Start Reading</button>
                    </div>
                    <div className="reading-card">
                        <h3>📚 Short Stories</h3>
                        <p>Engaging stories with comprehension questions.</p>
                        <button onClick={handleStartPractice}>Start Reading</button>
                    </div>
                    <div className="reading-card">
                        <h3>🧠 Academic Texts</h3>
                        <p>Advanced materials for IELTS/TOEFL preparation.</p>
                        <button onClick={handleStartPractice}>Start Reading</button>
                    </div>
                </div>
            </div>

            <div className="reading-section">
                <h2>🔍 Reading Skills</h2>
                <div className="reading-grid">
                    <div className="reading-card">
                        <h3>⏱️ Speed Reading</h3>
                        <p>Techniques to improve your reading speed and retention.</p>
                        <button onClick={handleStartPractice}>Practice Now</button>
                    </div>
                    <div className="reading-card">
                        <h3>🤔 Critical Reading</h3>
                        <p>Develop skills to analyze and evaluate texts.</p>
                        <button onClick={handleStartPractice}>Practice Now</button>
                    </div>
                    <div className="reading-card">
                        <h3>📝 Comprehension</h3>
                        <p>Exercises to test your understanding of texts.</p>
                        <button onClick={handleStartPractice}>Practice Now</button>
                    </div>
                </div>
            </div>

            <div className="reading-section">
                <h2>🎯 Practice Tests</h2>
                <div className="reading-grid">
                    <div className="reading-card">
                        <h3>📖 Full-length Tests</h3>
                        <p>Simulate real exam conditions with timed tests.</p>
                        <button onClick={handleStartPractice}>Start Test</button>
                    </div>
                    <div className="reading-card">
                        <h3>✍️ Fill-in-the-blank</h3>
                        <p>Practice with context-based vocabulary exercises.</p>
                        <button onClick={handleStartPractice}>Try Now</button>
                    </div>
                    <div className="reading-card">
                        <h3>🔗 Matching Exercises</h3>
                        <p>Connect headings to paragraphs or match synonyms.</p>
                        <button onClick={handleStartPractice}>Try Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReadingPage;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Writing.css';

function WritingPage() {
    const navigate = useNavigate();

    const handleStartPractice = () => {
        navigate("/login");
    };

    return (
        <div className="writing-container">
            <div className="writing-hero">
                <h1>✍️ Writing Mastery</h1>
                <p>Enhance your English writing skills with structured lessons, practical exercises, and personalized feedback.</p>
            </div>

            <div className="writing-section">
                <h2>📄 Writing Types</h2>
                <div className="writing-grid">
                    <div className="writing-card">
                        <h3>📝 Essays</h3>
                        <p>Master different essay formats (opinion, argumentative, descriptive).</p>
                        <button onClick={handleStartPractice}>Start Writing</button>
                    </div>
                    <div className="writing-card">
                        <h3>📊 Reports</h3>
                        <p>Learn to write formal reports with proper structure.</p>
                        <button onClick={handleStartPractice}>Start Writing</button>
                    </div>
                    <div className="writing-card">
                        <h3>✉️ Emails/Letters</h3>
                        <p>Practice professional and informal correspondence.</p>
                        <button onClick={handleStartPractice}>Start Writing</button>
                    </div>
                </div>
            </div>

            <div className="writing-section">
                <h2>🛠️ Writing Tools</h2>
                <div className="writing-grid">
                    <div className="writing-card">
                        <h3>🔠 Grammar Checker</h3>
                        <p>Interactive exercises to improve sentence structure.</p>
                        <button onClick={handleStartPractice}>Practice Now</button>
                    </div>
                    <div className="writing-card">
                        <h3>📚 Academic Vocabulary</h3>
                        <p>Upgrade your word choice for formal writing.</p>
                        <button onClick={handleStartPractice}>Practice Now</button>
                    </div>
                    <div className="writing-card">
                        <h3>🧩 Cohesion Builder</h3>
                        <p>Learn linking words and paragraph organization.</p>
                        <button onClick={handleStartPractice}>Practice Now</button>
                    </div>
                </div>
            </div>

            <div className="writing-section">
                <h2>🎯 Exam Preparation</h2>
                <div className="writing-grid">
                    <div className="writing-card">
                        <h3>🏆 IELTS Writing</h3>
                        <p>Task 1 (Graphs) and Task 2 (Essays) practice.</p>
                        <button onClick={handleStartPractice}>Start Practice</button>
                    </div>
                    <div className="writing-card">
                        <h3>🌎 TOEFL Writing</h3>
                        <p>Integrated and independent writing tasks.</p>
                        <button onClick={handleStartPractice}>Start Practice</button>
                    </div>
                    <div className="writing-card">
                        <h3>📝 Get Feedback</h3>
                        <p>Submit your writing for expert evaluation.</p>
                        <button onClick={handleStartPractice}>Try Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WritingPage;

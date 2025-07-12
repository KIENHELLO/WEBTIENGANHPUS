import { useNavigate } from 'react-router-dom';
import React from 'react';

function Testcenter() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/login");
    };
    return (
        <>
            <div className="section">
                <h1>Learning Testcenter</h1>
                <div className="tools-grid">
                    <div className="tool-card">
                        <h3>🅰 Grammar Checker</h3>
                        <p>Check your writing for grammar, spelling, and punctuation errors.</p>
                        <button onClick={handleClick} className="try-exercise-link">
                            Use Testcenter
                        </button>
                    </div>
                    <div className="tool-card">
                        <h3>📋 English Level Test</h3>
                        <p>Assess your current English proficiency level with our comprehensive test.</p>
                        <button onClick={handleClick} className="try-exercise-link">
                            Take Test
                        </button>
                    </div>
                    <div className="tool-card">
                        <h3>🗣 Pronunciation Guide</h3>
                        <p>Learn how to pronounce difficult English words correctly.</p>
                        <button onClick={handleClick} className="try-exercise-link">
                            Explore
                        </button>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Testcenter;

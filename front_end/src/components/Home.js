import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/login'); // Chuyển hướng đến trang Login
    };
    return (
        <div className="home-container">
            {/* Phần header */}
            <header className="home-header">
                <h1>EnglishWeb</h1>
            </header>

            {/* Phần Vocabulary nổi bật */}
            <section className="featured-vocabulary">
                <div className="vocab-highlight">
                    <h2>VOCABULARY MASTERY</h2>
                    <div className="vocab-content">
                        <p className="vocab-quote">"Master vocabulary - Master the language"</p>
                        <div className="vocab-description">
                            <p>Build your vocabulary foundation with our comprehensive word bank.</p>
                            <p>Learn words in context for better retention and usage.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Phần các kỹ năng chính (rút gọn) */}
            <div className="main-skills">
                <div className="skill-card speaking">
                    <h3>Testcenter</h3>
                    <p>Bài kiểm tra tổng hợp</p>
                    <button onClick={() => navigate('/testcenter')} className="explore-button">
                        Khám phá
                    </button>
                </div>

                <div className="skill-card vocabulary">
                    <h3>Vocabulary</h3>
                    <p>Mở rộng vốn từ vựng của bạn qua các chủ đề, cụm từ, và trò chơi.</p>
                    <button onClick={() => navigate('/vocabulary')} className="explore-button">
                        Khám phá
                    </button>
                </div>


                <div className="skill-card writing">
                    <h3>Writing</h3>
                    <p>Học viết tiếng Anh chuẩn</p>
                    <button onClick={() => navigate('/writing')} className="explore-button">
                        Khám phá
                    </button>
                </div>

                <div className="skill-card reading">
                    <h3>Reading</h3>
                    <p>Nâng cao kỹ năng đọc hiểu</p>
                    <button onClick={() => navigate('/reading')} className="explore-button">
                        Khám phá
                    </button>
                </div>
            </div>

            {/* Phần Bài học nổi bật (đã cập nhật) */}
            <section className="featured-lessons">
                <h2>BÀI HỌC NỔI BẬT</h2>
                <div className="lessons-grid">
                    {/* Bài học Vocabulary */}
                    <div className="lesson-card vocabulary">
                        <h3>VOCABULARY</h3>
                        <p>500 Từ vựng thông dụng</p>
                        <p>Học 500 từ vựng tiếng Anh thông dụng nhất trong giao tiếp hàng ngày.</p>
                        <div className="lesson-footer">
                            <span>24 bài học</span>
                            <button onClick={() => navigate('/vocabulary')} className="explore-button">
                                Khám phá
                            </button>
                        </div>
                    </div>

                    {/* Bài học Reading */}
                    <div className="lesson-card reading">
                        <h3>READING</h3>
                        <p>Đọc hiểu bài báo & truyện ngắn</p>
                        <p>Nâng cao kỹ năng đọc thông qua các bài đọc thực tế và thú vị.</p>
                        <div className="lesson-footer">
                            <span>10 bài học</span>
                            <button onClick={() => navigate('/reading')} className="explore-button">
                                Khám phá
                            </button>
                        </div>
                    </div>

                    {/* Bài kiểm tra tổng hợp - Testcenter */}
                    <div className="lesson-card testcenter">
                        <h3>TESTCENTER</h3>
                        <p>Kiểm tra kỹ năng tổng hợp</p>
                        <p>Làm bài kiểm tra tổng hợp để đánh giá khả năng đọc, nghe và viết tiếng Anh của bạn.</p>
                        <div className="lesson-footer">
                            <span>5 bài kiểm tra</span>
                            <button onClick={() => navigate('/testcenter')} className="explore-button">
                                Khám phá
                            </button>
                        </div>
                    </div>


                    {/* Bài học Writing */}
                    <div className="lesson-card writing">
                        <h3>WRITING</h3>
                        <p>Luyện viết mô tả & email</p>
                        <p>Học viết tiếng Anh qua bài tập thực tế như email và mô tả cá nhân.</p>
                        <div className="lesson-footer">
                            <span>12 bài học</span>
                            <button onClick={() => navigate('/writing')} className="explore-button">
                                Khám phá
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
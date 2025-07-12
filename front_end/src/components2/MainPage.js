import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';
import {
    FaChartBar, FaBook, FaClipboardCheck, FaPenFancy, FaSignOutAlt, FaUserCircle, FaUser
} from 'react-icons/fa';

function MainPage() {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="main-container">
            {/* Sidebar */}
            <div className="sidebar">
                <div className="sidebar-header">
                    <FaUserCircle size={40} />
                    <h3>Hi, Nguyen Van A</h3>
                </div>
                <ul className="sidebar-menu">

                    <li onClick={() => handleNavigation("/vocabulary-page")}><FaBook /> Vocabulary</li>
                    <li onClick={() => handleNavigation("/reading-page")}><FaClipboardCheck /> Reading</li>

                    <li onClick={() => handleNavigation("/writing-page")}><FaPenFancy /> Writing</li>
                    <li onClick={() => handleNavigation("/testcenter-page")}><FaClipboardCheck /> Testcenter</li>
                    <li onClick={() => handleNavigation("/user")}><FaUser /> Tài khoản</li>
                    <li onClick={() => handleNavigation("/login")}><FaSignOutAlt /> Logout</li>

                </ul>
            </div>

            {/* Main Content */}
            <div className="content">
                <h2>🎉 Chào mừng bạn quay lại!</h2>

                <div className="cards">
                    <div className="card">
                        <img src="/assets/vocabulary.png" alt="Vocabulary" />
                        <h4>Từ vựng</h4>
                        <p>Bạn đã học 80/500 từ</p>
                        <button onClick={() => handleNavigation("/vocabulary")}>Tiếp tục học</button>
                        <div className="progress-bar"><div className="progress" style={{ width: '16%' }}></div></div>
                    </div>


                    <div className="card">
                        <img src="/assets/writing.png" alt="Writing" />
                        <h4>Viết</h4>
                        <p>Đã hoàn thành 3/10 bài</p>
                        <button onClick={() => handleNavigation("/writing-page")}>Luyện viết</button>
                        <div className="progress-bar"><div className="progress" style={{ width: '30%' }}></div></div>
                    </div>

                    <div className="card">
                        <img src="/assets/test.png" alt="Testcenter" />
                        <h4>Bài kiểm tra</h4>
                        <p>Điểm test gần nhất: 65</p>
                        <button onClick={() => handleNavigation("/testcenter-page")}>Xem lại</button>
                    </div>
                </div>

                <div className="recommend">
                    <span role="img" aria-label="calendar">📅</span> Hôm nay bạn nên học: <strong>Reading Lesson 4</strong>
                    <button className="today-btn" onClick={() => handleNavigation("/reading-page")}>Học ngay</button>
                </div>

                <div className="quote-box">
                    <p><i>"Learning never exhausts the mind."</i></p>
                    <small>— Leonardo da Vinci</small>
                </div>
            </div>
        </div>
    );
}

export default MainPage;

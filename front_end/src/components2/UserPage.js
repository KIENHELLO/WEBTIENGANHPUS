import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserPage.css';

const UserPage = () => {
    const navigate = useNavigate();

    // Dữ liệu mẫu - có thể thay bằng dữ liệu từ API
    const [user, setUser] = useState({
        name: 'Nguyễn Văn A',
        email: 'user@example.com',
        level: 'Intermediate',
        joinDate: '15/03/2023',
        avatar: 'https://i.pravatar.cc/150?img=3'
    });

    const [editMode, setEditMode] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser(prev => ({ ...prev, [name]: value }));
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <div className="user-page">
            <div className="user-header">
                <h2>Thông tin cá nhân</h2>
                <div>
                    <button
                        className="edit-btn"
                        onClick={() => setEditMode(!editMode)}
                    >
                        {editMode ? 'Lưu thay đổi' : 'Chỉnh sửa'}
                    </button>
                    <button
                        className="edit-btn logout-btn"
                        onClick={handleLogout}
                        style={{ marginLeft: '10px', backgroundColor: '#ff4d4f' }}
                    >
                        Đăng xuất
                    </button>
                </div>
            </div>

            <div className="user-profile">
                <div className="avatar-section">
                    <img src={user.avatar} alt="Avatar" className="user-avatar" />
                    {editMode && (
                        <button className="change-avatar-btn">Đổi ảnh đại diện</button>
                    )}
                </div>

                <div className="user-info">
                    <div className="info-item">
                        <label>Họ và tên:</label>
                        {editMode ? (
                            <input
                                type="text"
                                name="name"
                                value={user.name}
                                onChange={handleInputChange}
                            />
                        ) : (
                            <span>{user.name}</span>
                        )}
                    </div>

                    <div className="info-item">
                        <label>Email:</label>
                        <span>{user.email}</span>
                    </div>

                    <div className="info-item">
                        <label>Trình độ:</label>
                        {editMode ? (
                            <select
                                name="level"
                                value={user.level}
                                onChange={handleInputChange}
                            >
                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Advanced">Advanced</option>
                            </select>
                        ) : (
                            <span>{user.level}</span>
                        )}
                    </div>

                    <div className="info-item">
                        <label>Ngày tham gia:</label>
                        <span>{user.joinDate}</span>
                    </div>
                </div>
            </div>

            <div className="user-stats">
                <div className="stat-card">
                    <h3>Từ vựng đã học</h3>
                    <p>1,250 từ</p>
                </div>
                <div className="stat-card">
                    <h3>Bài viết đã làm</h3>
                    <p>28 bài</p>
                </div>
                <div className="stat-card">
                    <h3>Bài đọc đã hoàn thành</h3>
                    <p>15 bài</p>
                </div>
            </div>
        </div>
    );
};

export default UserPage;

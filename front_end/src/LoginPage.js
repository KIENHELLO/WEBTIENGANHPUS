import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    FaEnvelope,
    FaLock,
    FaUserCircle,
    FaFacebook,
    FaGoogle,
    FaApple,
} from "react-icons/fa";
import "./App.css";

const LoginPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        document.body.classList.add("login-page");
        return () => {
            document.body.classList.remove("login-page");
        };
    }, []);

const handleLogin = () => {
  localStorage.setItem("token", "mock_token_123");
  navigate("/dashboard"); // chuyển sang trang chính
};


    const handleRegister = (e) => {
        e.preventDefault();

        // TODO: kiểm tra mật khẩu và xác nhận khớp
        // TODO: kiểm tra email định dạng hợp lệ
        // TODO: gọi API đăng ký nếu có

        navigate("/dashboard");
    };


    return (
        <div className="login-container">
            <div className="login-card">
                <div className="avatar">
                    <FaUserCircle size={60} color="#5f3dc4" />
                </div>

                <div className="tabs">
                    <span className={isLogin ? "active-tab" : ""} onClick={() => setIsLogin(true)}>
                        Đăng nhập
                    </span>
                    <span className={!isLogin ? "active-tab" : ""} onClick={() => setIsLogin(false)}>
                        Đăng ký
                    </span>
                </div>

                {isLogin ? (
                    <>
                        <h2>Chào mừng trở lại</h2>
                        <p>Vui lòng đăng nhập để tiếp tục</p>
                        <form className="login-form" onSubmit={handleLogin}>
                            <div className="input-group">
                                <FaEnvelope className="icon" />
                                <input
                                    type="email"
                                    placeholder="Email của bạn"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <FaLock className="icon" />
                                <input
                                    type="password"
                                    placeholder="Mật khẩu"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            {errorMsg && (
                                <div style={{ color: "red", fontSize: "14px", marginBottom: "10px" }}>
                                    {errorMsg}
                                </div>
                            )}
                            <div className="options">
                                <label>
                                    <input type="checkbox" />
                                    Ghi nhớ đăng nhập
                                </label>
                                <a href="#">Quên mật khẩu?</a>
                            </div>
                            <button className="login-button" onClick={handleRegister}>Đăng nhập</button>
                        </form>
                    </>
                ) : (
                    <>
                        <h2>Tạo tài khoản mới</h2>
                        <p>Vui lòng nhập thông tin để đăng ký</p>
                        <form className="login-form">
                            <div className="input-group">
                                <FaEnvelope className="icon" />
                                <input type="email" placeholder="Email" required />
                            </div>
                            <div className="input-group">
                                <FaLock className="icon" />
                                <input type="password" placeholder="Mật khẩu" required />
                            </div>
                            <div className="input-group">
                                <FaLock className="icon" />
                                <input type="password" placeholder="Xác nhận mật khẩu" required />
                            </div>
                            <small>Mật khẩu cần ít nhất 8 ký tự</small>
                            <div className="options" style={{ marginTop: "10px" }}>
                                <label>
                                    <input type="checkbox" /> Tôi đồng ý với{" "}
                                    <a href="#">Điều khoản và Chính sách</a>
                                </label>
                            </div>
                            <button className="login-button" onClick={handleRegister}>Đăng ký ngay</button>

                            <p style={{ marginTop: "20px" }}>
                                Đã có tài khoản?{" "}
                                <span
                                    onClick={() => setIsLogin(true)}
                                    style={{ color: "#7b2cbf", cursor: "pointer" }}
                                >
                                    Đăng nhập ngay
                                </span>
                            </p>
                            <hr />
                            <p style={{ fontSize: "14px" }}>Hoặc đăng nhập/đăng ký với</p>
                            <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "10px" }}>
                                <FaFacebook size={30} color="#3b5998" />
                                <FaGoogle size={30} color="#db4a39" />
                                <FaApple size={30} color="#000" />
                            </div>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default LoginPage;

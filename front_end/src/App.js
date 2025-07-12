import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';

// Component dùng cho tất cả
import Navbar from './components/Navbar';
import './App.css';

// Giao diện chưa đăng nhập
import Home from './components/Home';
import Reading from './components/Reading';
import Writing from './components/Writing';
import Vocabulary from './components/Vocabulary';
import Testcenter from './components/Testcenter';
import LoginPage from './LoginPage';

// Giao diện sau đăng nhập (từ components2)
import MainPage from './components2/MainPage';
import VocabularyPage from './components2/VocabularyPage';
import ReadingPage from './components2/ReadingPage';
import WritingPage from './components2/WritingPage';
import TestcenterPage from './components2/TestcenterPage';
import UserPage from './components2/UserPage';

function NavbarController() {
  const location = useLocation();

  // Danh sách các path cần ẩn Navbar
  const hiddenPaths = [
    "/dashboard",
    "/vocabulary-page",
    "/reading-page",
    "/writing-page",
    "/testcenter-page",
    "/user"
  ];

  // Kiểm tra path hiện tại
  const shouldHideNavbar = hiddenPaths.some(path =>
    location.pathname.startsWith(path)
  );

  return shouldHideNavbar ? null : <Navbar />;
}

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarController />

        <div className="page-content">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />

            {/* Public Pages */}
            <Route path="/home" element={<Home />} />
            <Route path="/reading" element={<Reading />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/vocabulary" element={<Vocabulary />} />
            <Route path="/testcenter" element={<Testcenter />} />
            <Route path="/login" element={<LoginPage />} />

            {/* Private Pages */}
            <Route path="/dashboard" element={<MainPage />} />
            <Route path="/vocabulary-page" element={<VocabularyPage />} />
            <Route path="/reading-page" element={<ReadingPage />} />
            <Route path="/writing-page" element={<WritingPage />} />
            <Route path="/testcenter-page" element={<TestcenterPage />} />
            <Route path="/user" element={<UserPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

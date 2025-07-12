import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './VocabularyPage.css';
import { getWords } from '../api'; // đảm bảo file api.js đã có axios config

const VocabularyPage = () => {
  const navigate = useNavigate();
  const [words, setWords] = useState([]);
  const [wordData, setWordData] = useState(null);
  const [activeTab, setActiveTab] = useState('definitions');
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getWords()
      .then((res) => {
        setWords(res.data);
        if (res.data.length > 0) setWordData(res.data[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Lỗi khi gọi API:', err);
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      const found = words.find(
        (w) => w.term.toLowerCase() === searchInput.trim().toLowerCase()
      );
      if (found) {
        setWordData(found);
        setSearchInput('');
      } else {
        alert('Không tìm thấy từ bạn nhập.');
      }
    }
  };

  const toggleBookmark = () => setIsBookmarked(!isBookmarked);
  const playAudio = () => {
  if (wordData?.term) {
    const utterance = new SpeechSynthesisUtterance(wordData.term);
    utterance.lang = 'en-US'; // giọng Mỹ
    utterance.rate = 0.95;    // tốc độ đọc
    speechSynthesis.speak(utterance);
  } else {
    console.warn('Không có từ để phát âm');
  }
};


  const Icon = ({ name }) => {
    const icons = {
      volume: '🔊',
      bookmark: '🔖',
      bookmarkEmpty: '📖',
      share: '↗️',
      brain: '🧠',
      chart: '📊',
      arrow: '→',
    };
    return <span className="icon">{icons[name]}</span>;
  };

  if (loading) return <div>Đang tải dữ liệu từ vựng...</div>;
  if (!wordData) return <div>Không có từ nào!</div>;

  return (
    <div className="vocabulary-page">
      {/* Header */}
      <header className="gradient-header">
        <button onClick={() => navigate('/dashboard')} className="MainPage">
          <span className="icon">🏠</span> Home
        </button>
        <h1 className="logo">EnglishWeb <span className="beta-badge">PRO</span></h1>
        <p className="tagline">Your Smart English Vocabulary Explorer</p>
      </header>

      {/* Search */}
      <div className="search-container">
        <form onSubmit={handleSearch} className="search-box">
          <input
            type="text"
            placeholder="🔍 Discover any English word..."
            className="animated-input"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type="submit" className="search-btn">
            <span>Explore</span> <Icon name="arrow" />
          </button>
        </form>
      </div>

      {/* Word Details */}
      <div className="dictionary-card">
        <div className="word-header">
          <h2 className="main-word">{wordData.term}</h2>
          <div className="word-actions">
            <button className="audio-btn" onClick={playAudio}>
              <Icon name="volume" />
            </button>
            <button className="bookmark-btn" onClick={toggleBookmark}>
              <Icon name={isBookmarked ? 'bookmark' : 'bookmarkEmpty'} />
            </button>
            <button className="share-btn">
              <Icon name="share" />
            </button>
          </div>
        </div>

        <div className="word-content">
          <div className="tab-container">
            <button
              className={`tab ${activeTab === 'definitions' ? 'active' : ''}`}
              onClick={() => setActiveTab('definitions')}
            >
              Definitions
            </button>
          </div>
          <div className="tab-content">
            <div className="definition-section">
              <div className="definition-card">
                <p>{wordData.definition}</p>
                {wordData.example && (
                  <div className="example">"{wordData.example}"</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

    

      {/* Footer */}
      <footer className="page-footer">
        <button onClick={() => navigate('/dashboard')} className="MainPage">
          ← Back to Home
        </button>
      </footer>
    </div>
  );
};

export default VocabularyPage;

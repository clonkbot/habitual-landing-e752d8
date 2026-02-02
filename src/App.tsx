import { useState, useEffect } from 'react';
import './App.css';

const reviews = [
  { name: 'Sarah M.', rating: 5, text: 'Finally stuck to my morning routine! 47 days and counting.', avatar: 'S' },
  { name: 'James K.', rating: 5, text: 'The gentle reminders changed everything. No guilt, just progress.', avatar: 'J' },
  { name: 'Emily R.', rating: 5, text: 'Lost 15 lbs just by tracking water and walks. Simple but powerful.', avatar: 'E' },
  { name: 'Michael T.', rating: 5, text: 'Been using for 6 months. Best investment in myself I ever made.', avatar: 'M' },
];

const pressLogos = ['Forbes', 'TechCrunch', 'The Verge', 'Wired'];

const goals = [
  { icon: '🌅', title: 'Morning Routine', desc: 'Wake up energized every day' },
  { icon: '💧', title: 'Stay Hydrated', desc: 'Track water intake effortlessly' },
  { icon: '🏃', title: 'Move More', desc: 'Build lasting exercise habits' },
  { icon: '😴', title: 'Better Sleep', desc: 'Wind down and rest deeply' },
  { icon: '🧘', title: 'Mindfulness', desc: 'Find calm in the chaos' },
  { icon: '📚', title: 'Read Daily', desc: 'Feed your mind consistently' },
];

const stats = [
  { value: '2.4M+', label: 'Active Users' },
  { value: '89%', label: 'Habit Success Rate' },
  { value: '47 days', label: 'Avg. Streak Length' },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < rating ? 'star filled' : 'star'}>★</span>
      ))}
    </div>
  );
}

function App() {
  const [currentReview, setCurrentReview] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      {/* Background decorations */}
      <div className="bg-blob blob-1" />
      <div className="bg-blob blob-2" />
      <div className="bg-blob blob-3" />
      <div className="grain-overlay" />

      {/* Header */}
      <header className={`header ${isVisible ? 'visible' : ''}`}>
        <div className="logo">
          <div className="logo-icon">
            <svg viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" />
              <path d="M10 16l4 4 8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="logo-text">Habitual</span>
        </div>
        <nav className="nav">
          <a href="#features" className="nav-link">Features</a>
          <a href="#reviews" className="nav-link">Reviews</a>
          <button className="btn-secondary">Sign In</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className={`hero ${isVisible ? 'visible' : ''}`}>
        <div className="hero-badge">
          <span className="badge-dot" />
          Trusted by 2.4M+ people worldwide
        </div>

        <h1 className="hero-title">
          Build habits that<br />
          <span className="highlight">actually stick</span>
        </h1>

        <p className="hero-subtitle">
          Stop the cycle of starting and quitting. Our science-backed approach
          helps you build lasting habits with gentle nudges, not guilt trips.
        </p>

        <div className="hero-cta">
          <button className="btn-primary">
            Start Free Today
            <span className="btn-arrow">→</span>
          </button>
          <span className="cta-note">No credit card required</span>
        </div>

        {/* App mockup */}
        <div className="phone-mockup">
          <div className="phone-frame">
            <div className="phone-notch" />
            <div className="phone-screen">
              <div className="app-header-mock">
                <span>Good morning, Sarah!</span>
                <span className="streak-badge">🔥 47</span>
              </div>
              <div className="habit-list">
                <div className="habit-item completed">
                  <div className="habit-check">✓</div>
                  <span>Morning meditation</span>
                  <span className="habit-time">7:30 AM</span>
                </div>
                <div className="habit-item completed">
                  <div className="habit-check">✓</div>
                  <span>Drink water</span>
                  <span className="habit-time">8:00 AM</span>
                </div>
                <div className="habit-item">
                  <div className="habit-check empty" />
                  <span>30 min walk</span>
                  <span className="habit-time">9:00 AM</span>
                </div>
                <div className="habit-item">
                  <div className="habit-check empty" />
                  <span>Read for 20 min</span>
                  <span className="habit-time">8:00 PM</span>
                </div>
              </div>
              <div className="progress-card">
                <span className="progress-label">Today's Progress</span>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '50%' }} />
                </div>
                <span className="progress-text">2 of 4 completed</span>
              </div>
            </div>
          </div>
          <div className="phone-glow" />
        </div>
      </section>

      {/* Press Section */}
      <section className={`press-section ${isVisible ? 'visible' : ''}`}>
        <p className="press-label">As featured in</p>
        <div className="press-logos">
          {pressLogos.map((logo, i) => (
            <div key={logo} className="press-logo" style={{ animationDelay: `${i * 0.1}s` }}>
              {logo}
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div key={stat.label} className="stat-card" style={{ animationDelay: `${i * 0.15}s` }}>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="pain-section">
        <div className="pain-content">
          <h2 className="section-title">Sound familiar?</h2>
          <div className="pain-grid">
            <div className="pain-card">
              <div className="pain-icon">😩</div>
              <p>"I start strong but always give up after a week"</p>
            </div>
            <div className="pain-card">
              <div className="pain-icon">😤</div>
              <p>"Other apps make me feel guilty when I miss a day"</p>
            </div>
            <div className="pain-card">
              <div className="pain-icon">😵</div>
              <p>"I have too many goals and don't know where to start"</p>
            </div>
          </div>
          <div className="solution-callout">
            <div className="callout-line" />
            <p>
              <strong>Habitual is different.</strong> We use behavioral psychology to help you
              build one habit at a time, with compassion — not pressure.
            </p>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section id="features" className="goals-section">
        <h2 className="section-title">What will you achieve?</h2>
        <p className="section-subtitle">Pick your focus. We'll guide you there.</p>

        <div className="goals-grid">
          {goals.map((goal, i) => (
            <div key={goal.title} className="goal-card" style={{ animationDelay: `${i * 0.1}s` }}>
              <span className="goal-icon">{goal.icon}</span>
              <h3 className="goal-title">{goal.title}</h3>
              <p className="goal-desc">{goal.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="reviews-section">
        <h2 className="section-title">Loved by millions</h2>
        <div className="reviews-container">
          <div className="review-main">
            <StarRating rating={reviews[currentReview].rating} />
            <p className="review-text">"{reviews[currentReview].text}"</p>
            <div className="review-author">
              <div className="author-avatar">{reviews[currentReview].avatar}</div>
              <span className="author-name">{reviews[currentReview].name}</span>
            </div>
          </div>
          <div className="review-dots">
            {reviews.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === currentReview ? 'active' : ''}`}
                onClick={() => setCurrentReview(i)}
              />
            ))}
          </div>
        </div>

        <div className="app-store-ratings">
          <div className="store-rating">
            <span className="store-icon">🍎</span>
            <div>
              <StarRating rating={5} />
              <span className="store-text">4.9 on App Store (127K reviews)</span>
            </div>
          </div>
          <div className="store-rating">
            <span className="store-icon">🤖</span>
            <div>
              <StarRating rating={5} />
              <span className="store-text">4.8 on Play Store (89K reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="final-cta">
        <div className="cta-card">
          <h2>Ready to become your best self?</h2>
          <p>Join 2.4 million people building better habits, one day at a time.</p>
          <button className="btn-primary btn-large">
            Start Your Journey Free
            <span className="btn-arrow">→</span>
          </button>
          <div className="cta-features">
            <span>✓ Free 7-day trial</span>
            <span>✓ Cancel anytime</span>
            <span>✓ Works offline</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-credit">
          Requested by <a href="https://twitter.com/0xmhl" target="_blank" rel="noopener noreferrer">@0xmhl</a> · Built by <a href="https://twitter.com/clonkbot" target="_blank" rel="noopener noreferrer">@clonkbot</a>
        </p>
      </footer>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function HomePage() {
  return (
    <div>
      <div className="hero-section">
        <h1>🐙 OctoFit Tracker</h1>
        <p>Track your fitness, compete with your team, and achieve your goals</p>
      </div>
      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">📊 Activities</h5>
              <p className="card-text">Log and track your daily activities</p>
              <Link to="/activities" className="btn btn-primary">View Activities</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">🏆 Leaderboard</h5>
              <p className="card-text">See how you rank against other users</p>
              <Link to="/leaderboard" className="btn btn-primary">View Leaderboard</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">👥 Teams</h5>
              <p className="card-text">Create and manage your fitness teams</p>
              <Link to="/teams" className="btn btn-primary">View Teams</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">👤 Users</h5>
              <p className="card-text">Browse and connect with other users</p>
              <Link to="/users" className="btn btn-primary">View Users</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">💪 Workouts</h5>
              <p className="card-text">Get personalized workout suggestions</p>
              <Link to="/workouts" className="btn btn-primary">View Workouts</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">🐙 OctoFit</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" to="/activities">Activities</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/leaderboard">Leaderboard</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/teams">Teams</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/users">Users</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/workouts">Workouts</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </div>
      <footer className="bg-light text-center py-4 mt-5">
        <div className="container">
          <p className="text-muted mb-0">&copy; 2024 OctoFit Tracker. All rights reserved.</p>
        </div>
      </footer>
    </Router>
  );
}

export default App;

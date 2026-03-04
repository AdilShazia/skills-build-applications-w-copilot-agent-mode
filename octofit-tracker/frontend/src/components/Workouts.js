import React, { useState, useEffect } from 'react';

function Workouts() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;
    console.log('Fetching workouts from', url);
    
    fetch(url)
      .then(res => res.json())
      .then(json => {
        console.log('Workouts data:', json);
        setItems(json.results ? json.results : json);
        setLoading(false);
      })
      .catch(err => {
        console.error('Workouts fetch error:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading"><div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div></div>;
  if (error) return <div className="error-message">Error: {error}</div>;
  if (!items || items.length === 0) {
    return <div className="empty-state"><div className="empty-state-icon">💪</div><p>No workouts found</p></div>;
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>💪 Workouts</h2>
        <button className="btn btn-success">+ Create Workout</button>
      </div>
      <div className="row">
        {items.map((item, index) => (
          <div key={item.id || index} className="col-md-6 col-lg-4 mb-3">
            <div className="card h-100">
              <div className="card-header">
                <h5 className="card-title mb-0">{item.name || item.workout_type || item.type || 'Workout ' + (index + 1)}</h5>
              </div>
              <div className="card-body">
                <p className="card-text"><strong>Duration:</strong> {item.duration || '-'} min</p>
                <p className="card-text"><strong>Difficulty:</strong> {item.difficulty || item.level || '-'}</p>
                <p className="card-text"><strong>Exercises:</strong> {item.exercises_count || item.exercise_count || '-'}</p>
                <p className="card-text"><small className="text-muted">{item.description || 'N/A'}</small></p>
              </div>
              <div className="card-footer bg-white">
                <button className="btn btn-sm btn-primary me-2">Start</button>
                <button className="btn btn-sm btn-warning me-2">Edit</button>
                <button className="btn btn-sm btn-danger">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Workouts;

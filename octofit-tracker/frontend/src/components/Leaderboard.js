import React, { useState, useEffect } from 'react';

function Leaderboard() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;
    console.log('Fetching leaderboard from', url);
    
    fetch(url)
      .then(res => res.json())
      .then(json => {
        console.log('Leaderboard data:', json);
        setItems(json.results ? json.results : json);
        setLoading(false);
      })
      .catch(err => {
        console.error('Leaderboard fetch error:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading"><div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div></div>;
  if (error) return <div className="error-message">Error: {error}</div>;
  if (!items || items.length === 0) {
    return <div className="empty-state"><div className="empty-state-icon">🏆</div><p>No leaderboard data found</p></div>;
  }

  return (
    <div>
      <h2>🏆 Leaderboard</h2>
      <div className="card">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover table-striped">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>User</th>
                  <th>Score</th>
                  <th>Activities</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={item.id || index}>
                    <td>
                      <span className="badge bg-primary">{index + 1}</span>
                    </td>
                    <td>{item.user || item.name || item.username || '-'}</td>
                    <td><strong>{item.score || item.points || '-'}</strong></td>
                    <td>{item.activities_count || item.activity_count || '-'}</td>
                    <td>
                      <span className="badge bg-success">Active</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;

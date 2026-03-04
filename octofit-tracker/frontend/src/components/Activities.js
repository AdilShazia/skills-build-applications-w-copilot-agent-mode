import React, { useState, useEffect } from 'react';

function Activities() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;
    console.log('Fetching activities from', url);
    
    fetch(url)
      .then(res => res.json())
      .then(json => {
        console.log('Activities data:', json);
        setItems(json.results ? json.results : json);
        setLoading(false);
      })
      .catch(err => {
        console.error('Activities fetch error:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading"><div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div></div>;
  if (error) return <div className="error-message">Error: {error}</div>;
  if (!items || items.length === 0) {
    return <div className="empty-state"><div className="empty-state-icon">📋</div><p>No activities found</p></div>;
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Activities</h2>
        <button className="btn btn-success">+ Add Activity</button>
      </div>
      <div className="card">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Duration</th>
                  <th>Calories</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={item.id || index}>
                    <td>{item.id || '-'}</td>
                    <td>{item.name || item.activity_type || '-'}</td>
                    <td>{item.duration || '-'}</td>
                    <td>{item.calories || '-'}</td>
                    <td>{item.date || item.created_at || '-'}</td>
                    <td>
                      <button className="btn btn-sm btn-primary me-2">Edit</button>
                      <button className="btn btn-sm btn-danger">Delete</button>
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

export default Activities;

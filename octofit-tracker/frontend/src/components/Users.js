import React, { useState, useEffect } from 'react';

function Users() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/users/`;
    console.log('Fetching users from', url);
    
    fetch(url)
      .then(res => res.json())
      .then(json => {
        console.log('Users data:', json);
        setItems(json.results ? json.results : json);
        setLoading(false);
      })
      .catch(err => {
        console.error('Users fetch error:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading"><div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div></div>;
  if (error) return <div className="error-message">Error: {error}</div>;
  if (!items || items.length === 0) {
    return <div className="empty-state"><div className="empty-state-icon">👤</div><p>No users found</p></div>;
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>👤 Users</h2>
        <button className="btn btn-success">+ Add User</button>
      </div>
      <div className="card">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Join Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={item.id || index}>
                    <td>{item.id || '-'}</td>
                    <td>{item.name || item.username || item.first_name || '-'}</td>
                    <td>{item.email || '-'}</td>
                    <td>{item.date_joined || item.created_at || '-'}</td>
                    <td>
                      <span className={`badge ${item.is_active ? 'bg-success' : 'bg-secondary'}`}>
                        {item.is_active ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-primary me-2">View</button>
                      <button className="btn btn-sm btn-warning me-2">Edit</button>
                      <button className="btn btn-sm btn-danger">Remove</button>
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

export default Users;

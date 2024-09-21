import React, { useState } from 'react';
import { fetchAdvancedUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [repos, setRepos] = useState('');
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUserData([]);

    try {
      const data = await fetchAdvancedUserData(username, location, repos);
      setUserData(data.items); // GitHub Search API returns data in `items` array
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container p-4 max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Search GitHub User"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Location (Optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Minimum Repositories (Optional)"
          value={repos}
          onChange={(e) => setRepos(e.target.value)}
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {userData.length > 0 && (
        <div className="user-results mt-4 space-y-4">
          {userData.map((user) => (
            <div key={user.id} className="border p-4 rounded bg-gray-100">
              <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
              <h2 className="text-xl">{user.login}</h2>
              <p>Location: {user.location || 'Not specified'}</p>
              <p>Repositories: {user.public_repos || 'Unknown'}</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;

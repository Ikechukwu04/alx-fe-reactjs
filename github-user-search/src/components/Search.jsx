import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState(''); 
  const [userData, setUserData] = useState(null); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(''); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search GitHub User"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && (
        <div className="user-info">
          <img src={userData.avatar_url} alt={userData.login} />
          <h2>{userData.login}</h2>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;


const [page, setPage] = useState(1);
const [totalCount, setTotalCount] = useState(0);

const handleSubmit = async (e) => {
  e.preventDefault();
  setPage(1);
  setLoading(true);
  setError('');
  setUserData([]);

  try {
    const data = await fetchAdvancedUserData(username, location, repos);
    setUserData(data.items);
    setTotalCount(data.total_count);
  } catch (err) {
    setError('Something went wrong. Please try again.');
  } finally {
    setLoading(false);
  }
};

const loadMore = async () => {
  setPage(page + 1);
  const data = await fetchAdvancedUserData(username, location, repos, page + 1);
  setUserData([...userData, ...data.items]); // Append new results
};

return (
  <div>
    {/* Existing form and result rendering code */}

    {userData.length > 0 && userData.length < totalCount && (
      <button onClick={loadMore} className="bg-blue-500 text-white p-2 mt-4 rounded">
        Load More
      </button>
    )}
  </div>
);

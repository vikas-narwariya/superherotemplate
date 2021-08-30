import React, { useState } from 'react';
import MovieResults from './MovieResults';

function FetchApi() {
  const [searchText, setSearchText] = useState('');
  const [herodata, setherodata] = useState([]);
  

  async function searchSuperHeroes () {
    const response = await fetch(`https://www.superheroapi.com/api.php/3084920855117657/search/${searchText}`);
    const data = await response.json();
    console.log("searchSuperHeroes -> data", data)

    setherodata(data.results);
  }

  function handleChange (e) {
    const searchTerm = e.target.value;
    
    setSearchText(searchTerm);
    if (searchTerm.length === 0) {
      setherodata([]);
    }
    if (searchTerm.length > 3) {
      searchSuperHeroes();
    }
  }

  return (
    <div className="App">
      
      <div className="main">
      <div>
      <input
        id="search-bar"
        type="search"
        placeholder="Search Your Favourite Movies..."
        onChange={handleChange}
        value={searchText}
        style={{width: "70rem", height: "4rem", }}
      />
    </div>
        
        <MovieResults herodata={herodata} />
      </div>
    </div>
  );
}

export default FetchApi;


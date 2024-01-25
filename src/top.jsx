import React, { useState } from "react";
import Button from "./Button/Button";


function Top({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const backgroundImageStyle = {
    backgroundImage: `url("./images/300.jpeg")`, // Update the path to your image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="main-main" style={backgroundImageStyle}>
      <div className="overlay"></div>
        <div className="content">
            <div className="title"></div>
            <div className="search-box">
                <input
                    className="search-bar"
                    type="text"
                    placeholder="Search for movies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className="main">
                <h1 className="h">Free Movies to Watch,</h1>
                <h1 className="h">Anytime Anywhere.</h1>
                <h3 className="g">The search is over! Let Plex help you find the perfect </h3>
                <h3 className="g">movie to watch tonight for free.</h3>
                <br></br>
                <div className="button">
                    <h1>
                        <Button></Button>
                    </h1>
                </div>
           </div>
      </div>
    </div>
  );
}

export default Top;

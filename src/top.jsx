import React, { useState } from "react";
import Button from "./Button/Button";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faSearch, faBarsStaggered);

function Top({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = () => {
        onSearch(searchQuery);
    };

    return (
        <div className="main-main">
            <div className="up">
                <div className="titel">
                    <img src="./images/logo.png" alt="logo" width={"20%"} />
                    <div className="search-box">
                        <FontAwesomeIcon icon={faSearch} size="lg" />
                        <input
                            className="search-bar"
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{ border: 'none' }}
                        />
                        <button onClick={handleSearch}>Search</button>
                        <div className="burger-menu right-align">
                            <FontAwesomeIcon icon={faBarsStaggered} size="lg" id="burger-menu" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-main">
                {/* Background image style should be defined in external CSS */}
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
                        <br />
                        <div className="button">
                            <h1>
                                <Button></Button> {/* You're importing and using Button component here */}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Top;

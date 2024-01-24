import React, { useState } from "react";
import Button from "./Button/Button";

function Top({ onSearch }) {

    const [searchQuery, setSearchQuery] = useState("");
    const handleSearch = () => { onSearch(searchQuery); };
     
    return (
        <div className="main-main">
            <div className="up">
                <div class="titel">
                    <h1>Reel-Feel</h1> 
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
                </div>
            </div>
            <div className="main">
                <h1 className="h">Free Movies to Watch,</h1>
                <h1 className="h">Anytime Anywhere.</h1>
                <h2 className="h">
                    You are just a search away from directly watching any movie, in any quality, you want.
                    So grab yourself and get going
                </h2>
                <div className="main2">
                    <div className="button">
                        <h1><Button></Button></h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Top;

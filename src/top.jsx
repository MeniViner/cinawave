import React, { useState } from "react";
import Button from "./Button/Button";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass, faSearch, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faMagnifyingGlass, faSearch, faBarsStaggered);


function Top({ onSearch }) {

    const [searchQuery, setSearchQuery] = useState("");
    const handleSearch = () => { onSearch(searchQuery); };
     
    return (
        <div className="main-main">
            <div className="up">
                <div class="titel">
                     
                    <img src="./images/logo.png" alt="logo" width={"20%"}/>
                    
                    <div className="search-box">

                        <FontAwesomeIcon icon={faSearch} size="lg "/>
                        <input
                        className="search-bar"
                        type="text"                
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{ border: 'none' }}
                        
                    /> 

                    <button onClick={handleSearch}>Search</button>

                    <div className="burger-menu right-align" >
                        <FontAwesomeIcon icon={faBarsStaggered} size="lg" id="burger-menu"/>
                         
                    </div>
                    
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

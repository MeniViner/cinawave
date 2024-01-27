import Button from "./Button/Button";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass, faSearch, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link ,useLocation} from 'react-router-dom'; 


library.add(faMagnifyingGlass, faSearch, faBarsStaggered);

function Top({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState("");
    const location = useLocation(); // Get the current location
    const handleSearch = () => {onSearch(searchQuery);};
    const backgroundImageStyle = {
        backgroundImage: `url("./images/300.jpeg")`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="main-main" style={backgroundImageStyle}>
            <div className="overlay"></div>
            <div className="up">
                <br></br>
                <div className="titel"> 
                    <img className="logo" src="./images/logo.png" alt="logo" width={"20%"}/>
                    <div className="search-box">
                        <FontAwesomeIcon icon={faSearch} size="lg "/>
                        <input
                            className="search-bar"
                            type="text"                
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{ border: 'none' }}  
                            onKeyDown={handleKeyDown} 
                        />
                    </div>
                    <div className="additional-links">
                        <Link to="/" className={location.pathname === '/' ? 'active-link' : ''}>Home</Link>
                        <Link to="/my-list" className={location.pathname === '/my-list' ? 'active-link' : ''}>My List</Link>
                        <Link to="/series" className={location.pathname === '/series' ? 'active-link' : ''}>Series</Link>
                    </div>
                    <div className="burger-menu right-align">
                        <FontAwesomeIcon icon={faBarsStaggered} size="lg" id="burger-menu"/>
                    </div>
                </div>
                <div className="content">
                    <div className="main">
                        <h1 className="h">Free Movies to Watch,</h1>
                        <h1 className="h">Anytime Anywhere.</h1>
                        <h3 className="g">The search is over! Let CinaWawe help you find the perfect </h3>
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
        </div>
    );
}

export default Top;
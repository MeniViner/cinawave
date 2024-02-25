import Button from "./Button/Button";
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { faSearch, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Titel({ onSearch, searchQuery, setSearchQuery, handleKeyDown }) {
    const location = useLocation();

    return (
        <div className="titel">
            <img className="logo" src="/images/logo.png" alt="logo" />
            <div className="search-box">
                <FontAwesomeIcon icon={faSearch} size="lg" id="search-icon" />
                <input
                    className="search-bar"
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </div>
            <div className="additional-links">
                <Link to="/" className={location.pathname === '/' ? 'active-link' : ''}>Home</Link>
                <Link to="/my-list" className={location.pathname === '/my-list' ? 'active-link' : ''}>My List</Link>
                <Link to="/series" className={location.pathname === '/series' ? 'active-link' : ''}>Series</Link>
            </div>
            <div className="burger-menu">
                <FontAwesomeIcon icon={faBarsStaggered} size="lg" id="burger-menu" />
            </div>
        </div>
    );
}


function Top({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState("");
    const location = useLocation();

    const backgroundImageStyle = {
        backgroundImage: `url("./images/300.jpeg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            onSearch(searchQuery);
        }
    };

    if (location.pathname === '/my-list' || location.pathname.startsWith('/card')) {
        return (
            <div>
                <br />
                <Titel
                    onSearch={onSearch}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    handleKeyDown={handleKeyDown}
                />
            </div>
        );
    }

    return (
        <div className="main-main" style={backgroundImageStyle}>
            <div className="overlay"></div>
            <div className="up">
                <br />
                <Titel
                    onSearch={onSearch}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    handleKeyDown={handleKeyDown}
                />
                <div className="content">
                    <div className="main">
                        <h1 className="main-title">Free Movies to Watch,</h1>
                        <h1 className="main-title">Anytime Anywhere.</h1>
                        <h3 className="secondary-title">The search is over! Let CinaWawe help you find the perfect </h3>
                        <h3 className="secondary-title">movie to watch tonight for free.</h3>
                        <br />
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
export { Titel };


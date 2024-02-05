import React, { useState, createContext, useContext } from 'react';
import './Mosh.css';

const UserContext = createContext();

function Mosh() {
    const [totalLikes, setTotalLikes] = useState(0);

    const handleLike = () => {
        setTotalLikes(totalLikes + 1);
    };

    const handleDislike = () => {
        setTotalLikes(totalLikes - 1);
    };

    return (
        <UserContext.Provider value={{ totalLikes, handleLike, handleDislike }}>
            <div className="main">
                <Button type="like" />
                <PrintSum />
                <Button type="dislike" />
            </div>
            <form>
                <label>Enter your name:
                    <input type="text" />
                </label>
                <label>Enter your name:
                    <input type="text" />
                </label>
                <select 
                    className="gogo" 
                    value="" 
                    onChange=""
                >

                </select>
            </form>
        </UserContext.Provider>
    );
}

function Button({ type }) {
    const { handleLike, handleDislike } = useContext(UserContext);

    const handleClick = () => {
        if (type === 'like') {
            handleLike();
        } else if (type === 'dislike') {
            handleDislike();
        }
    };

    return (
        <div>
            <button className='button' onClick={handleClick}>{type === 'like' ? 'Like' : 'Dislike'}</button>
        </div>
    );
}

function PrintSum() {
    const { totalLikes } = useContext(UserContext);

    return (
        <div>
            <div className='text'>{totalLikes}</div>
        </div>
    );
}

export default Mosh;

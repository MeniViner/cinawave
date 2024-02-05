import React, { useState, createContext, useContext } from 'react';
import './Mosh.css';

const UserContext = createContext();

function Mosh() {
    const [totalLikes, setTotalLikes] = useState(0);

    const handleLike = (event,target) => {
        setTotalLikes(totalLikes + parseInt(event.target.value, 10));
    };

    const handleDislike = (event,target) => {
        setTotalLikes(totalLikes - parseInt(event.target.value, 10));
    };

    const handleChange = (event) => {
        setTotalLikes(totalLikes + parseInt(event.target.value, 10));
    }

    return (
        <UserContext.Provider value={{ totalLikes, handleLike, handleDislike }}>
            <div className="main">
                <Button type="like" />
                <PrintSum/>
                <Button type="dislike" />

                <form>
                    <h2>select likes to add</h2>
                    <select  onChange={handleChange}>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </form>
            </div>
            
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
        <button 
            className='button' onClick={handleClick}>{type === 'like' ? 'Like' : 'Dislike'}
        </button>
    );
}

function PrintSum() {
    const { totalLikes } = useContext(UserContext);

    return (
        <div className='text'>{totalLikes}</div>
    );
}

export default Mosh;

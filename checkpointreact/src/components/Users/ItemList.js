import React from 'react';

const ItemList = ({user}) => {
    return (
        <div className="card">
            <div className="card-content blue-text text-darken-3">
                <span className="card-title ">{user.name}</span>
                <p>{user.last_namep}</p>
                <p className="blue-text">{user.last_namem}</p>
                <p className="blue-text">{user.age}</p>
            </div>
        </div>
    );
}

export default ItemList;

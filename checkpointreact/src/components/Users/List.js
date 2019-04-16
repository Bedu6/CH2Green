import React from 'react';
import ItemList from './ItemList'

const List = ({users}) => {
    return (
        <div className="my-table section">
            {users && users.map(user=>{
                return(
                    <ItemList user={user} key={user.id}/>
                )
            })}
        </div>
    );
}

export default List;

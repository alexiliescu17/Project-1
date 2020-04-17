import React from 'react';
import UserItem from './UserItem';
import './UserItem.css';


function UserList(props) {
    const { users } = props;

    return (
        <div className="userlist">
            { users.map((user, index) => {
                return <UserItem
                    id={ user.id }
                    name={ user.name }
                    email={ user.email }
                    isGoldClient={ user.isGoldClient }
                    salary = {user.salary}
                    image={user.image}
                    key={ index }
                />
            })}
        </div>
    );
}

export default UserList;
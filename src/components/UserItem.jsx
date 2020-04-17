import React from 'react';

function UserItem(props) {
    const {name, email, salary, image, isGoldClient} = props;

    return (
        <div className="user">
            <h3>{ name }</h3>
            <p>{ email }</p>
            <p>{ salary }</p>
            <p>{ image }</p>
            { isGoldClient
                ? <h3>Client GOLD</h3>
                : null
            }
            <button onClick={() => this.deleteUsers(this.users.id)} >Delete</button>
        </div>
    );
}

export default UserItem;
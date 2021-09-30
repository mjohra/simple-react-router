import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const{id,name,phone,website,address}=props.friend;
    const friendStyle={
        border:'3px solid red',
        padding:'10px',
        borderRadius:'10px'

    }
    return (
        <div style={friendStyle}>
            <h2>I am {name}</h2>
            <h5>Call me: {phone}</h5>
            <p>visit me: {website}</p>
            <p><small>I Live in {address.city}</small></p>
            <Link to = {`/friend/${id}`}>Visit Me</Link>

        </div>
    );
};

export default Friend;
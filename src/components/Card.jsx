import React, { useState } from 'react';

import user from "../images/user.png";
import Star from './Star';

function Card () {

    const [contact, setContact] = useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    });
    
    function toggleFavorite() {
        setContact(prevContact => ({
            ...prevContact, isFavorite: !prevContact.isFavorite
        }))
    }

    return ( 
        <div className="main">
            <article className="card">
                <img src={user} className="card--image" />
                <div className="card--info">
                    <Star isFilled={contact.isFavorite} handleClick={toggleFavorite}/>
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </div>
     );
}

export default Card;
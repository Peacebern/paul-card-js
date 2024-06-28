import React from 'react'
import "../Styles/Card.css"



function Card({
    name,
    stack,
    role,
    image,
    images,
    title,
    link,
}) {
    return (
        <div className='card'>
            <card className='card-sub'>
                <div className='cardcontainer'><img src={image} alt={title} /></div>
                <p className='p1-size'>{name}</p>
                <p className='p1-size'>{stack}</p>
                <p className='p2-size'>{role}</p>
                <img src={images} alt={title} />
                <p className='link-color'>{link}</p>
            </card>
            
        </div>
    )
}

export default Card
import React from 'react';
import data from "../data.js";
import Card from './Card.jsx';
import "../Styles/CardDisplay.css"

function CardDisplay() {
    return (
        <div className='wrap'>
                {data.map(item => (
                    <Card 
                    name={item.name}
                    role={item.role}
                    image={item.image}
                    images={item.images}
                    link={item.link}
                    stack={item.stack}
                    />
                ))

                }
        </div>
    );
}

export default CardDisplay
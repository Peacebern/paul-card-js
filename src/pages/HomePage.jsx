import React from 'react'
import Navbar from '../Components/Navbar.jsx';
import CardDisplay from '../Components/CardDisplay.jsx';
import "../Styles/HomePage.css"
import Footer from '../Components/Footer.jsx';

function HomePage() {
    return (
        <div className='container'>
            <Navbar />
            <CardDisplay />
            <Footer />
        </div>
    );
}

export default HomePage;
import React from 'react';
import "../Styles/Footer.css";

function Footer() {
    return (
        <div className='foot'>
            <nav className='foot-sub'>
                <div className='foot-sub-menu'>
                    <ul className='ul-question'>
                        <li>Questions? Call +234 657-000-66</li>
                    </ul>
                    <ul className='ul-menu'>
                        <ul className='foot-li'>
                            <li>Our Products</li>
                            <li>Starters Ed-Management</li>
                            <li>Traverse</li>
                            <li>PayGo</li>
                            <li>PayPal</li>
                        </ul>
                        <ul className='foot-li'>
                            <li>FAQ</li>
                            <li>Investor relations</li>
                            <li>Ways to Subscribe</li>
                            <li>Corporate Information</li>
                            <li>Only On BuddySub</li>
                        </ul>
                        <ul className='foot-li'>
                            <li>Media Center</li>
                            <li>Buy Gift Cards</li>
                            <li>Cookie Preferences</li>
                            <li>Legal Notices</li>
                        </ul>
                        <ul className='foot-li'>
                            <li>Help Center</li>
                            <li>Jobs</li>
                            <li>Terms of Use</li>
                            <li>Contact Us</li>
                        </ul>
                        <ul className='foot-li'>
                            <li><button>English</button></li>
                            <li>BuddySub</li>
                        </ul>
                    </ul>
                </div>
                
                
            </nav>
        </div>
    );
}

export default Footer
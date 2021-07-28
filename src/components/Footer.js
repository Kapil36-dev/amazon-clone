import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'

export default function Footer() {
    return (
            <div className='footer-container'>
                <div class='footer-links'>
                    <div className='footer-link-wrapper'>
                        <div class='footer-link-items'>
                            <h2>Get to Know Us</h2>
                            <Link to='/'>Careers</Link>
                            <Link to='/sign-up'>Blog</Link>
                            <Link to='/'>About Amazon</Link>
                            <Link to='/'>Investor Relations</Link>
                            <Link to='/'>Amazon Devices</Link>
                        </div>
                        <div class='footer-link-items'>
                            <h2>Make Money with Us</h2>
                            <Link to='/'>Sell products on Amazon</Link>
                            <Link to='/'>Sell on Amazon Business</Link>
                            <Link to='/'>Destinations</Link>
                            <Link to='/'>Sponsorships</Link>
                        </div>
                    </div>
                    <div className='footer-link-wrapper'>
                        <div class='footer-link-items'>
                            <h2>Amazon Payment Products</h2>
                            <Link to='/'>Amazon Business Card</Link>
                            <Link to='/'>Shop with Points</Link>
                            <Link to='/'>Reload Your Balance</Link>
                            <Link to='/'>Amazon Currency Converter</Link>
                        </div>
                        <div class='footer-link-items'>
                            <h2>Let Us Help You</h2>
                            <Link to='/'>Amazon and COVID-19</Link>
                            <Link to='/'>Your Account</Link>
                            <Link to='/'>Your Orders</Link>
                            <Link to='/'>Returns & Replacements</Link>
                            <Link to='/'>Manage Your Content and Devices</Link>
                        </div>
                    </div>
                </div>
                <Link to='/' className='footer-logo'>
                    <img className='footer-logo-img' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='logo' />
                </Link>
            </div>
    )
}

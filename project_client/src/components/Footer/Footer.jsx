import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Co be lo lem</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.facebook_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
                
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <li>+84-969601510</li>
                <li>foodty@tomato.com</li>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 @ tomato.com-All Right Reserved.</p>
    </div>
    
  )
}

export default Footer
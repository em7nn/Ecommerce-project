import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./footer.scss"
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footerTop">
                <div className="footerDiv">
                    <div className="footerLogo">
                        <NavLink to='/' className="footerLogoLink">
                            <h2 className="footerLogoTitle">EUShop</h2>
                            <h4 className="footerLogoTitle">Online Shopping</h4>
                        </NavLink>
                        <div className="footerLinks">
                            <Link to="/">Baku, Azerbaijan</Link>
                            <Link to="/">emin_usubov@bk.ru</Link>
                            <Link to="/">+994 77 742 50 10</Link>
                        </div>
                    </div>
                </div>
                <div className="footerDiv">
                    <div className="footerTitle">
                        <h4>Shopping & Categories</h4>
                    </div>
                    <div className="footerLinks">
                        <Link to="/">Men's Shopping</Link>
                        <Link to="/">Women's Shopping</Link>
                        <Link to="/">Kid's Shopping</Link>
                    </div>
                </div>
                <div className="footerDiv">
                    <div className="footerTitle">
                        <h4>Useful Links</h4>
                    </div>
                    <div className="footerLinks">
                        <Link to="/">Home Page</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/">Help</Link>
                        <Link to="/contact">Contact Us</Link>
                    </div>
                </div>
                <div className="footerDiv">
                    <div className="footerTitle">
                        <h4>Help & Information</h4>
                    </div>
                    <div className="footerLinks">
                        <Link to="/">Helps</Link>
                        <Link to="/">FAQ's</Link>
                        <Link to="/">Shipping</Link>
                        <Link to="/">Tracking ID</Link>
                    </div>
                </div>
            </div>
            <div className="footerBottom">
                <div className="footerBottomCopyright">
                    <p className="footerBottomText">Copyright &copy; EUSHOP, All Rights Reserved.</p>
                    <p className="footerBottomText">Design: <Link to="/">Em7n</Link></p>
                    <p className="footerBottomText">Distributed by: <Link to=''>Emin Usubov </Link></p>
                    <div className="footerBottomSocials">
                        <Link to='/'><FaFacebookF /></Link>
                        <Link to='/'><FaInstagram /></Link>
                        <Link to='/'><FaTwitter /></Link>
                        <Link to='/'><FaYoutube /></Link>
                        <Link to='/'><FaLinkedin /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
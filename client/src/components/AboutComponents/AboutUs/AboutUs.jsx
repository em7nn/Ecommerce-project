import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaQuoteLeft, FaTwitter, FaYoutube } from 'react-icons/fa'
import "./aboutus.scss"
import { Link } from "react-router-dom"

const AboutUs = () => {
    return (
        <div className='aboutUs'>
            <div className="aboutUsDiv">
                <div className="aboutUsTop">
                    <img src="./assets/uploads/about-us-page-heading.jpg" alt="" />
                    <div className='aboutUsTexts'>
                        <h2>About Our Company </h2>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                    </div>
                </div>
                <div className="aboutUsBottom">
                    <div className="aboutUsBottomLeft">
                        <div className="aboutUsBottomImg">
                            <img src="./assets/uploads/about-left-image.jpg" alt="" />
                        </div>
                    </div>
                    <div className="aboutUsBottomRight">
                        <div className="aboutUsBottomTexts">
                            <h2>About Us & Our Skills</h2>
                            <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>


                            <div className="exploreQuote">
                                <FaQuoteLeft />
                                <p className="exploreQuoteText">Lorem, ipsum dolor sit amet consectetur adipisicing elit. mollitia similique rem consectetur non, nemo dicta pariatur ipsum esse reprehenderit...</p>
                            </div>

                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nihil molestiae perferendis dicta quis ipsa suscipit libero, pariatur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, fuga. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat delectus ab mollitia magnam deserunt, reiciendis qui exercitationem rerum nisi doloremque expedita accusantium deleniti maxime non cupiditate suscipit eum ullam hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, asperiores illo. Provident unde blanditiis voluptate!</span>
                        </div>
                        <div className="aboutUsBottomSocials">
                            <Link to="/"><FaFacebook /></Link>
                            <Link to="/"><FaInstagram /></Link>
                            <Link to="/"><FaTwitter /></Link>
                            <Link to="/"><FaYoutube /></Link>
                            <Link to="/"><FaLinkedin /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="aboutUsOthers">
                <div className="aboutUsContent">
                    <h2>Our Amazing Team</h2>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                </div>
                <div className="aboutUsImages">
                    <div className="aboutUsImage">
                        <div className="aboutUsImageTop">
                            <img src="./assets/uploads/team-member-01.jpg" alt="" />
                            <div className="aboutUsImageHover">
                                <Link to="/"><FaFacebook /></Link>
                                <Link to="/"><FaInstagram /></Link>
                                <Link to="/"><FaTwitter /></Link>
                                <Link to="/"><FaYoutube /></Link>
                                <Link to="/"><FaLinkedin /></Link>
                            </div>
                        </div>
                        <div className="aboutUsImageBottom">
                            <h4>Carry Light</h4>
                            <span>Product Caretaker</span>
                        </div>
                    </div>
                    <div className="aboutUsImage">
                        <div className="aboutUsImageTop">
                            <img src="./assets/uploads/team-member-02.jpg" alt="" />
                            <div className="aboutUsImageHover">
                                <Link to="/"><FaFacebook /></Link>
                                <Link to="/"><FaInstagram /></Link>
                                <Link to="/"><FaTwitter /></Link>
                                <Link to="/"><FaYoutube /></Link>
                                <Link to="/"><FaLinkedin /></Link>
                            </div>
                        </div>
                        <div className="aboutUsImageBottom">
                            <h4>Danial Jordan</h4>
                            <span>Product Caretaker</span>
                        </div>
                    </div>
                    <div className="aboutUsImage">
                        <div className="aboutUsImageTop">
                            <img src="./assets/uploads/team-member-03.jpg" alt="" />
                            <div className="aboutUsImageHover">
                                <Link to="/"><FaFacebook /></Link>
                                <Link to="/"><FaInstagram /></Link>
                                <Link to="/"><FaTwitter /></Link>
                                <Link to="/"><FaYoutube /></Link>
                                <Link to="/"><FaLinkedin /></Link>
                            </div>
                        </div>
                        <div className="aboutUsImageBottom">
                            <h4>Florentino Perez</h4>
                            <span>Product Caretaker</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="aboutUsOthers">
                <div className="aboutUsContent">
                    <h2>Our Services</h2>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                </div>
                <div className="aboutUsImagesDiv">
                    <div className="aboutUsImgDiv">
                        <h4>Synther Vaporware</h4>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis libero aliquid consequatur temporibus, quae quam eveniet veniam maxime, aut fuga eius.</span>
                        <img src="./assets/uploads/service-01.jpg" alt="" />
                    </div>
                    <div className="aboutUsImgDiv">
                        <h4>Locavore Squidward</h4>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis libero aliquid consequatur temporibus, quae quam eveniet veniam maxime, aut fuga eius.</span>
                        <img src="./assets/uploads/service-02.jpg" alt="" />
                    </div>
                    <div className="aboutUsImgDiv">
                        <h4>Health Gothfam</h4>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis libero aliquid consequatur temporibus, quae quam eveniet veniam maxime, aut fuga eius.</span>
                        <img src="./assets/uploads/service-03.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
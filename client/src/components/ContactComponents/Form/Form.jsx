import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import "./form.scss"

const Form = () => {
    return (
        <div className='form'>
            <div className="formDiv">
                <div className="formTop">
                    <img src="./assets/uploads/about-us-page-heading.jpg" alt="" />
                    <div className='formTexts'>
                        <h2>Contact Us</h2>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                    </div>
                </div>
                <div className="formBottom">
                    <div className="formBottomLeft">
                        <div className="formBottomMaps">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d388945.3037910338!2d49.57477866687904!3d40.394777391865645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2sBaku!5e0!3m2!1sen!2saz!4v1677243672273!5m2!1sen!2saz" width={750} height={450} style={{ border: "none " }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div className="formBottomRight">
                        <div className="formBottomTexts">
                            <h2>Say Hello, Don't Be Shy!</h2>
                            <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
                        </div>
                        <div className="formBottomForm">
                            <form>
                                <div className="formBottomGroups">
                                    <input type="text" required placeholder='Your Name'/>
                                    <input type="text" required placeholder='Your Email'/>
                                </div>
                                <div className="formBottomGroups">
                                    <textarea name="" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
                                </div>
                                <button className='formBottomBtn'><FaPaperPlane /></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form
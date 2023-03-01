import React from 'react'
import "./subscribe.scss"
import { FaPaperPlane } from "react-icons/fa"

const Subscribe = () => {
  return (
    <div className='subscribe'>
      <div className="subscribeDiv">
        <div className="subscribeLeft">
          <h2 className="subscribeTitle">By Subscribing To Our Newsletter You Can Get 30% Off</h2>
          <span className='subscribeDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus modi minus labore sequi! Culpa soluta minus iste. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, expedita.</span>
          <form>
            <div className="subscribeFormGroups">
              <div className="subscribeFormGroup">
                <input type="text" placeholder='Your Name' required />
                <input type="text" placeholder='Your Email Adress' required />
                <button><FaPaperPlane/></button>
              </div>
            </div>
          </form>
        </div>
        <div className="subscribeRight">
          <div className="subscribeRightLeft">
            <div>
              <h4>Store Location:</h4>
              <span>Baku, Azerbaijan</span>
            </div>
            <div>
              <h4>Phone:</h4>
              <span>+994 077 742 50 10</span>
            </div>
            <div>
              <h4>Official Location:</h4>
              <span>Street 8, Boulvard</span>
            </div>
          </div>
          <div className="subscribeRightRight">
            <div>
              <h4>Work Hours:</h4>
              <span>08:00 AM - 9:00 PM Daily</span>
            </div>
            <div>
              <h4>Email:</h4>
              <span>emin_usubov@bk.ru</span>
            </div>
            <div>
              <h4>Social Media:</h4>
              <span>Instagram, Linkedin, Twitter, Facebook, YouTube</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
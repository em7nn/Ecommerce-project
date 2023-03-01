import React from 'react'
import "./explore.scss"
import { FaQuoteLeft } from "react-icons/fa"
import { Link } from "react-router-dom"

const Explore = () => {
  return (
    <div className='explore'>
      <div className="exploreDiv">
        <div className="exploreDivLeft">
          <h2 className="exploreTitle">Explore Our Products</h2>
          <span className="exploreDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, vel corporis. Suscipit quas natus, nisi provident expedita ab aperiam beatae cum nemo animi aliquam id qui neque corrupti eius incidunt quo tempora excepturi, et, debitis laudantium dicta. Dignissimos quae officiis asperiores in, expedita ex? Numquam quo voluptas facere dolor officia.</span>
          <div className="exploreQuote">
            <FaQuoteLeft />
            <p className="exploreQuoteText">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores animi porro obcaecati laudantium mollitia similique rem consectetur non, nemo dicta pariatur ipsum esse reprehenderit...</p>
          </div>
          <p className="exploreDescText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsa eum ad. Culpa natus dignissimos blanditiis officia fuga molestiae ratione quos tempora hic vero qui, tenetur nulla a dolor dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero rerum, dolores natus ducimus amet reiciendis voluptatum quidem perferendis debitis veritatis.</p>

          <p className="exploreDescText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsa eum ad. Culpa natus dignissimos blanditiis officia fuga molestiae ratione quos tempora hic vero qui, tenetur nulla a dolor dicta... <Link to='/contact'>Contact Us</Link></p>
          <Link to="/products" className="exploreLink">Discover More</Link>
        </div>
        <div className="exploreDivRight">
          <div className="exploreDivCards">
            <div className="exploreDivCard">
              <div className="exploreDivTexts">
                  <h4>Leather Bags</h4>
                  <span>Latest Collection</span>
              </div>
            </div>
            <div className="exploreDivCard">
              <div className="exploreDivImg">
                <img src="./assets/uploads/explore-image-01.jpg" alt="" />
              </div>
            </div>
            <div className="exploreDivCard">
            <div className="exploreDivImg">
                <img src="./assets/uploads/explore-image-02.jpg" alt="" />
              </div>
            </div>
            <div className="exploreDivCard">
            <div className="exploreDivTexts">
                  <h4>Different Types</h4>
                  <span>Over 304 Products</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explore
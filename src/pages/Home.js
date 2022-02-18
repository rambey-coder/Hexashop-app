import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
      <>
        <div className="contain">

          <div className="card1">
            <img src='./images/left-banner-image.jpg' className='banner-img' alt='banner'/>
            <div className="text-content">
              <h1>We Are Hexashop</h1>
              <p>Awesome, clean &amp; creative HTML5 Template</p>
        
              <Link to='/' className='img-link'>
                Purchase Now!
                </Link>
            
            </div>
          </div>

          <div className="card2">
            
            <div className="sub1">

            <div className="general">
            <img src="./images/baner-right-image-01.jpg" alt="1"  className='sub-img martb'/>

              <div className="cont">
                <h2>Women</h2>
                <p>Best Clothes For Women</p>
              </div>

              <div className="onhover">
                <h2>Women</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse!</p>

                <Link to='/WomenCollection' className='hover-link'>
                  Discover More
                </Link>
              </div>
              </div>


              <div className="gen">
              <img src="./images/baner-right-image-03.jpg" alt="3" className='sub-img' />

              <div className="cont1">
                <h2>Kids</h2>
                <p>Best Clothes For Kids</p>
              </div>

              <div className="onhover1">
                <h2>Kids</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse!</p>

                <Link to='/KidsCollection' className='hover-link1'>
                  Discover More
                </Link>
              </div>
              </div>

              
              
            </div>

            <div className="sub2">

            <div className="general">
            <img src="./images/baner-right-image-02.jpg" alt="2" className='sub-img martb' />

              <div className="cont">
                <h2>Men</h2>
                <p>Best Clothes For Men</p>
              </div>

              <div className="onhover">
                <h2>Men</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse!</p>

                <Link to='/MenCollection' className='hover-link'>
                  Discover More
                </Link>
              </div>
              </div>


              <div className="gen">
              <img src="./images/baner-right-image-04.jpg" alt="4" className='sub-img'/>

              <div className="cont1">
                <h2>Accessories</h2>
                <p>Best Trends Accessories</p>
              </div>

              <div className="onhover1">
                <h2>Accessories</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse!</p>

                <Link to='/Accessories' className='hover-link1'>
                  Discover More
                </Link>
              </div>
              </div>

            </div>
          </div>
        </div>
      </>
  );
};

export default Home;

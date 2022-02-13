import React, { useState } from 'react';
import './WomenCollection.css'
import { womanData } from './womenData';

const WomenCollection = () => {
    const [current, setCurrent] = useState(0)

    const length = womanData.length;

    const nextData = () => {
        setCurrent(current === length -1 ? 0 : current+1)
        
    }

    const prevData = () => {
        setCurrent(current === 0 ? length -1 : current -1)
        
    }

    if (!Array.isArray(womanData) || womanData.length <= 0) {
        return null;
    }
    
  return (
      <div className='woman-general'>
           <i className='fa-solid fa-caret-left left-arrow-women' onClick={prevData}/>

        <i className="fa-solid fa-caret-right right-arrow-women" onClick={nextData}/>

          <div className="woman-container">
              <h1>Women's Latest</h1>
              <p>Details to details is what makes Hexashop different from the other themes.</p>

              <div className="woman-image slider">
                  {womanData.map((moves, count) => {
                      return  (
                          <div className={count === current ? 'slide active' : 'slide'} key={count}>
                              {count === current &&  <img src={moves.img} alt='i know you' className='img-woman'/>}
                              
                              
                          </div>
                      )
                  })}
              </div>
          </div>
      </div>
  );
};

export default WomenCollection;

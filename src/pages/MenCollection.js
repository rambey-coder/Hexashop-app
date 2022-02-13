import React, { useState } from 'react';
import './MenCollection.css';
import { sliderData } from './sliderData';

const MenCollection = ({ slide }) => {
    const [current, setCurrent] = useState(0);

    const length = slide.length;

    const next = () => {
        setCurrent(current === length - 1 ? 0 : current+1)
    };

    const prev = () => {
        setCurrent(current === 0 ? length -1 : current-1 )
    }

    if(!Array.isArray(slide) || slide.length <= 0) {
        return null
    }


  return (
      <div className='genera'>
         
          <i className='fa-solid fa-caret-left left-arrow' onClick={prev}/>

          <i className="fa-solid fa-caret-right right-arrow" onClick={next}/>

        <div className="containa">
             <h1>Men's Latest</h1>
            <p>Details to details is what makes Hexashop different from the other themes.</p>

            <div className="image-slides">
                
                {sliderData.map((slides, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (<img src={slides.image} alt='let see you' className='image'/>)}
                            
                        </div>
                        
                    )
                })}
            </div>
        </div>
        </div>
  );
};

export default MenCollection;

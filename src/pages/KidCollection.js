import React, { useState} from 'react';
import './KidCollection.css';
import { kidSlider } from './KidSlider'

const KidCollection = () => {
    const [current, setCurrent] = useState(0);

    const length = kidSlider.length;

    const next = () => {
        setCurrent(current === length - 1 ? 0 : current+1)
    };

    const prev = () => {
        setCurrent(current === 0 ? length -1 : current-1 )
    }

    if(!Array.isArray(kidSlider) || kidSlider.length <= 0) {
        return null
    }
  return (
      <>
      <div className="section">
        <i className='fa-solid fa-caret-left left-arrow' onClick={prev} />

        <i className="fa-solid fa-caret-right right-arrow" onClick={next}/>

          <div className="kid-sec">
              <h1>Kid's Latest</h1>
              <p>Details to details is what makes Hexashop different from the other themes.</p>

              <div className="kid-img">
                {/* {kidSlider.map((slider, index) => {
                    return <img src={slider.images} alt='kiddo' className='kids' />
                })} */}
                 {kidSlider.map((slider, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (<img src={slider.images} alt='let see you' className='image'/>)}
                            
                        </div>
                        
                    )
                })}
              </div>
          </div>
      </div>
      </>
  );
};

export default KidCollection;

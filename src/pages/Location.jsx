import React from 'react';
import '../style/styleLocation.scss';
import MapContainer from '../components/MapConatiner'
import useOnClick from '../functions/useOnClick';

const Location = () => {
    const handleClick = useOnClick();
    
  return (
    <>
    <section className='location'>
        <div className='location__container-text'>
            <p className='location__paragraph'>Allow access to geo data on the device mark your address on the map</p>
        </div>
        <div className='location__container-map'>
            <MapContainer/>
        </div>
        <div className='location__container-span'>
            <span className='location__span'>Where I am ?</span>
        </div>
        <div className='location__container-button'>
            <button 
            className='location__button'
            onClick={()=>handleClick("confirm", "")}
            >
                <span className='location__textButton'>Confirm</span>
            </button>
        </div>
    </section>
       
    </>
  )
}

export default Location
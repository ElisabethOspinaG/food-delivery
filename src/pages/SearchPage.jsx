import React from 'react';
import "../style/styleSearch.scss";
import lupa from "../assets/img/search/Search.svg"
import useOnClick from '../functions/useOnClick';

const SearchPage = () => {
  const handleClick = useOnClick();

  return (
    <>
      <section className='search'>
        <div className='search__container-button'>
                    <button 
                    className='search__button'
                    onClick={()=>handleClick("")}
                    >
                        <img src={lupa} alt="lupa" />
                        <span className='search__button-filter'></span>
                    </button>
          </div>  

        </section>
    </>
  )
}

export default SearchPage;
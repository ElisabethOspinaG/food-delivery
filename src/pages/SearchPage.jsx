import React, { useEffect, useState } from 'react';
import LayoutHome from "../components/layout/LayoutHome"
import { FaSearch } from 'react-icons/fa';
import { IoIosRefreshCircle } from "react-icons/io";
import "../style/styleSearchPage.scss"
import { useDispatch, useSelector } from "react-redux";
import { actionGetPaletasAsync } from "../redux/actions/actions";
import { IoMdTrash } from 'react-icons/io';

const SearchPage = () => {
  const dispatch = useDispatch();
  const paletas = useSelector((state) => state.paletasStore); // Suponiendo que tienes un reducer llamado "paletas" en tu store

  useEffect(() => {
    dispatch(actionGetPaletasAsync());
    console.log(paletas); 
  }, []);

  const [isInputFocused, setIsInputFocused] = useState(false);
  
  function handleInputFocus() {
    setIsInputFocused(true);
  }
  
  function handleInputBlur() {
    setIsInputFocused(false);
  }
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleInputClear() {
    setInputValue('');}

  return (
    <>
      <div className='search'>
        <h1>Recent Searches</h1>
        <div className='search__search'>
        </div>
        <div className='search__input'>
          <input type="text" placeholder="Recent Searches" className="input" onFocus={handleInputFocus} onBlur={handleInputBlur}value={inputValue} onChange={handleInputChange} />
      <button onClick={handleInputClear} id="buttontrash"><IoMdTrash /></button>
        <div className='form_input_profile'>
          <FaSearch className='fa' />
        </div>
        
        </div>
        {!isInputFocused && (
          <div className='search__div'>
            <IoIosRefreshCircle className="refresh-icon" />
            <span>esta</span>
          </div>
        )}
        <div className='search__result1'>
        {isInputFocused && (
          <div className='search__result'><img></img><h1></h1><h2></h2></div>)}</div>
        <LayoutHome className="layout" />
      </div>
    </>
  )
}

export default SearchPage;

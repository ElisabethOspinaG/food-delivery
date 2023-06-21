import React from 'react';
import LayoutHome from "../components/layout/LayoutHome"
import { FaSearch } from 'react-icons/fa';
import { IoIosRefreshCircle } from "react-icons/io";
import "../style/styleSearchPage.scss"

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionGetPaletasAsync } from "../redux/actions/actions";

 
const SearchPage = () => { const dispatch = useDispatch();
  const paletas = useSelector((state) => state.paletasStore); // Suponiendo que tienes un reducer llamado "paletas" en tu store

  useEffect(() => {
    dispatch(actionGetPaletasAsync());
    console.log(paletas); 
  }, []);

  // Muestra los datos en la consola


  return (
    < ><div className='search'>
           <h1>Recent Searches</h1>
           <div className='search__search'>{ FaSearch }
           </div><input type="text" placeholder="Recent Searches"className="input" />
           <div className='form_input_profile'>
   <input type="text" />
<FaSearch className='fa'></FaSearch>
</div>
           
        <div className='search__div'>
      <IoIosRefreshCircle  className="refresh-icon"/><span>esta</span>
    </div>
        <LayoutHome className="layout"></LayoutHome>
    </div>
   
        
    </>
  )
}

export default SearchPage;
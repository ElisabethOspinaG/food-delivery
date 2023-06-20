import React, { useCallback } from 'react';
import { useNavigate } from 'react-router';


const useOnClick = () => {
  const navigate = useNavigate();

    const handleClick =  useCallback((parametro, info) =>{
     
      if(parametro === "confirm") {
        console.log("hice click en boton confirmar ", parametro);
        
        navigate("/home")
      }
      if(parametro === "home") {
        console.log("hice click en home ", parametro);
        
        navigate("/home")
      }
      else if(parametro === "search") {
        console.log("hice click en la lupa ", parametro);
        navigate("/search")
      }
      else if(parametro === "order") {
        console.log("hice click en order ", parametro);
        navigate("/order")
      }
      else if(parametro === "profile") {
        console.log("hice click en profile ", parametro);
        navigate("/profile")
      }
      
      
    }, [navigate]);
  return handleClick;
};

export default useOnClick;
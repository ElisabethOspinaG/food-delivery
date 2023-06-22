import React from 'react';
import "./styleCounter.scss";
import {useSelector, useDispatch} from 'react-redux';
import { incrementCounter, decrementCounter } from '../../redux/actions/counterActions';

const CounterProducts = () => {
    const state = useSelector(state=>state);
    const dispatch = useDispatch();
  return (
    <>
        <div className='counter'>
            <button className='counter__buttons' onClick={() => dispatch(decrementCounter)}>
                 -
            </button>
            <button className='counter__date'>
                {state.counter}
            </button>
                < button className='counter__buttons' onClick={() => dispatch(incrementCounter)}>
                         +
            </button>
        </div >
    </>
  )
}

export default CounterProducts


//     useEffect(() => {
//         sessionStorage.setItem('infoCounter', JSON.stringify(counter));
// }, [counter]);


//       const handleClickPay= (parametro,info) => {
    
//         const infoCounter = JSON.parse(sessionStorage.getItem('infoCounter'));
//         console.log("Hice click en el botón pagar, la info del contador es:", infoCounter);
//         console.log(contador,'contadoractual');
//         if (contador === 0 || contador === null) {
//           console.log('hola');
//           Swal.fire(`Ooops", "No has seleccionado la cantidad a comprar`, "error");
//         } else {
//           Swal.fire("Good job!", "¿Deseas seguir con la compra?", "success").then(() => {
//             navigate("/buys");
//           });
//         }
//       };
    

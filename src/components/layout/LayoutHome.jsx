import "./styleLayoutHome.scss"
import imgHome from '../../assets/img/home/HomeGray.svg';
import imgSearch from '../../assets/img/home/Search.svg';
import imgOrder from '../../assets/img/home/Orders.svg';
import imgProfile from '../../assets/img/home/Profile.svg';
import useOnClick from '../../functions/useOnClick';


const LayoutHome = () => {
    // const handleClick = useOnClick();
   
    const buttonLayout = [
        {
            id: 1,
            title: "home",
            icon: imgHome,
            active: false,
            path: "/home"
        },
        {
            id: 2,
            title: "search",
            icon: imgSearch,
            active: false,
            path: "/search"
        },
        {
            id: 3,
            title: "order",
            icon: imgOrder,
            active: false,
            path: "/order"
        },
        {
            id: 4,
            title: "profile",
            icon: imgProfile,
            active: false,
            path: "/user"
        }
    ]
  return (
    <>
    <div className='home__layout'>

        {
            buttonLayout.map((item)=>(
                <button 
                key={item.id}
                className='home__layout-button'
                onClick={()=>handleClick(item.title)}
                >
                    <figure className='home__layout-figure'>
                        <img src={item.icon} alt={item.name} />
                    </figure>
            </button>
            ))
        };
    </div>

    </>
  )
}

export default LayoutHome

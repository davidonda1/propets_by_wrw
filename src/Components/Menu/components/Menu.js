import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css_module/menu.css'
import {
    GUEST_PAGE,
    logo_,
    pet_avatar,
    add_2,
    HOME_PAGE,
    LOST_PAGE,
    FOUND_PAGE, SERVICES, FAVORITES, USER_PAGE
} from "../../../utils/constants/constants";
import {
    BsFillHouseFill,
    GiMagnifyingGlass,
    MdPets,
    IoIosNotificationsOutline,
    AiOutlineStar,
    IoIosLogOut
} from "react-icons/all";
import Favorites from "../../Favorites/Favorites";
import {Link} from "react-router-dom";
import VetHelp from "../../Services/VetHelp/components/VetHelp";
import Lost from "../../Lost/Lost";
import Found_Post from "../../Posts/Found_Post";
import Home from "../../Home/Home";
import EditUser from "../../EditUser/components/EditUser";


const Menu = (props) => {

    const [page, setPage] = useState(HOME_PAGE);

    const renderPage = () => {
        switch (page) {
            case SERVICES:
                return <VetHelp/>
            case LOST_PAGE:
                return <Lost/>
            case FOUND_PAGE:
                return <Found_Post/>
            case HOME_PAGE:
                return <Home/>
            case FAVORITES:
                return <Favorites/>
            case USER_PAGE:
                return <EditUser/>
            default:
                return <Home/>
        }
    }

    useEffect(() => {
        setPage(props.match.path.slice(1, props.match.path.length))
    }, [props.match.path])

    return (
        <div className='jumbotron '>
            <div className='container-fluid HEADER  w-100 '>
                <div className='row'>
                    <div className='offset-2 logo col-2'>
                        <img src={logo_} alt='logo'/>
                    </div>
                    <button className='signin_btn  offset-5 col-1  justify-content-center  '>
                        <p className='signin_btn_text'>Sign in</p>
                    </button>
                </div>
            </div>
            <div className='container col-8 '>
                <div className='row '>
                    <nav className="navbar fixed-top mt-5  NAV col-2">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <Link className="nav-link" to={`${HOME_PAGE}`}><BsFillHouseFill/>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`${LOST_PAGE}`}><GiMagnifyingGlass/>Lost</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`${FOUND_PAGE}`}><MdPets/>Found</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link"
                                      to={`${SERVICES}`}><IoIosNotificationsOutline/>Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`${FAVORITES}`}><AiOutlineStar/>Favorites</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link col-1 BTN" to={`${USER_PAGE}`}><img src={pet_avatar}
                                                                                              alt={pet_avatar}/>Anna
                                    Smith</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link col-2 LOGOUT" to='/guest'><IoIosLogOut/>Logout</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className='col-8 MAIN '>
                        {renderPage()}
                    </div>
                    <div className='col-2 offset-2 mt-5'><img src={add_2} alt='advertisement'/></div>
                </div>
            </div>
        </div>
    );
};


export default Menu;

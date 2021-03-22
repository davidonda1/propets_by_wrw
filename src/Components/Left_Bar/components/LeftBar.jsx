import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css_module/left_bar.css'
import pet_avatar from '../../../utils/Images/petAvatar.png'
import {BsFillHouseFill} from "react-icons/bs";
import {GiMagnifyingGlass} from "react-icons/gi";
import {MdPets} from "react-icons/md";
import {IoIosNotificationsOutline} from "react-icons/io";
import {AiOutlineStar} from "react-icons/ai";
import {IoIosLogOut} from "react-icons/io";
import {Link} from "react-router-dom";
import {FAVORITES, FOUND_PAGE, HOME_PAGE, LOST_PAGE, SERVICES, USER_PAGE} from "../../../utils/constants/constants";

const LeftBar = () => {
    return (
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

    );
};

export default LeftBar;
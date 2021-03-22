import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css_module/menu.css'
import {pet_avatar} from "../../../utils/constants/constants";
import {BsFillHouseFill} from "react-icons/bs";
import {GiMagnifyingGlass} from "react-icons/gi";
import {MdPets} from "react-icons/md";
import {IoIosNotificationsOutline} from "react-icons/io";
import {AiOutlineSearch, AiOutlineStar} from "react-icons/ai";
import {IoIosLogOut} from "react-icons/io";
import RightBar from "../../RightBar/components/RightBar";
import Lost from "../../Lost/components/Lost";

import Header from "../../Header/components/Header";
import Found from "../../Found/components/Found";

const Menu = () => {
    return (
        <div className='jumbotron '>
            <Header/>
            <div className='container col-8 '>
                <div className='row '>
                    <nav class="navbar fixed-top mt-5  NAV col-2">
                        <ul class="navbar-nav ">
                            <li class="nav-item">
                                <a class="nav-link" href="#"><BsFillHouseFill/>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><GiMagnifyingGlass/>Lost</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><MdPets/>Found</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><IoIosNotificationsOutline/>Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><AiOutlineStar/>Favorites</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link col-1 BTN" href="#"><img src={pet_avatar} alt={pet_avatar}/>Anna
                                    Smith</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link col-2 LOGOUT" href="#"><IoIosLogOut/>Logout</a>
                            </li>
                        </ul>
                    </nav>

                </div>
                <div className='row'>
                    <div className='col-8 MAIN '><Lost/></div>
                    <RightBar/>
                </div>
            </div>
        </div>

    );
};

export default Menu;

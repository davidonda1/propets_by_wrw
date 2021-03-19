import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css_module/menu.css'
import {logo_} from "../../../utils/constants/constants";
import {pet_avatar} from "../../../utils/constants/constants";
import {BsFillHouseFill  } from "react-icons/bs";
import { GiMagnifyingGlass } from "react-icons/gi";
import { MdPets} from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineStar } from "react-icons/ai";
import { IoIosLogOut } from "react-icons/io";
import  add_2 from '../../../utils/Images/add2.png'
import Found_Post from "../../Posts/Found_Post";
import Lost_Post from "../../Posts/Lost_Post";
import Publish_Preview from "../../Publish_Preview/Publish_Preview";
import Edit_User from "../../Profile/Edit_User";
import EditUser from "../../EditUser/components/EditUser";

const Menu = () => {
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
            <div  className='container col-8 '>
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
                            <a className="nav-link col-1 BTN" href="#"><img src={pet_avatar} alt={pet_avatar}/>Anna Smith</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link col-2 LOGOUT" href="#"><IoIosLogOut/>Logout</a>
                        </li>
                    </ul>
                </nav>
                    <div className='col-8 MAIN '><EditUser/></div>
                    <div className='col-2 offset-2 mt-5'><img src={add_2} alt={add_2}/></div>
                </div>
            </div>
           {/* <div className='container'>
                <div className='row'>
                    <p className='col-2 BTN'><img src={pet_avatar} alt={pet_avatar}/>Anna Smith</p>
                </div>
            </div>*/}
           {/* <div className='container'>
                <div className='row'>
                    <li className="nav-item">
                        <a className="nav-link col-2 LOGOUT" href="#"><IoIosLogOut/>Logout</a>
                    </li>

                </div>
            </div>*/}
        </div>

    );
};

export default Menu;

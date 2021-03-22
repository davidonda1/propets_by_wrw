import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css_module/menu.css'
import {logo_} from "../../../utils/constants/constants";
import {pet_avatar} from "../../../utils/constants/constants";
import {BsFillHouseFill} from "react-icons/bs";
import {GiMagnifyingGlass} from "react-icons/gi";
import {MdPets} from "react-icons/md";
import {IoIosNotificationsOutline} from "react-icons/io";
import {AiOutlineSearch, AiOutlineStar} from "react-icons/ai";
import {IoIosLogOut} from "react-icons/io";
import add_2 from '../../../utils/Images/add2.png'
import Found_Post from "../../Posts/Found_Post";
import Lost_Post from "../../Posts/Lost_Post";
import Publish_Preview from "../../Publish_Preview/Publish_Preview";
import Edit_User from "../../Profile/Edit_User";
import EditUser from "../../EditUser/components/EditUser";

const Menu = () => {

    const renderAddRightBar = () => {
        return (
            <div className='col-2 offset-2 mt-5'><img src={add_2} alt={add_2}/></div>
        );
    }
    const renderMapRightBar = () => {
        return (
            <div className='col-2  mt-2 mr-2 mb-2'>
                <iframe className='iframe'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108513.53178060992!2d35.105319209952576!3d31.796445332286844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d7d634c1fc4b%3A0xd96f623e456ee1cb!2z0JjQtdGA0YPRgdCw0LvQuNC8!5e0!3m2!1sru!2sil!4v1616156400731!5m2!1sru!2sil"
                ></iframe>
            </div>
        );

    }
    const renderInput = () => {
        return (
            <div className='container INPUT_HEADER mb-3 mt-3'>
                <div className='row INPUT mt-3 mb-3'>
                    <input className='INPUT_text' type='text ' placeholder='Type ' />
                    <input className='INPUT_text' type='text ' placeholder='Breed'/>
                    <input className='INPUT_text' type='text ' placeholder='Additional features'/>
                    <input className='INPUT_text' type='text ' placeholder='Location'/>
                </div>

            </div>
        );

    }

    const renderLostFoundHeader = () => {

        return (

            <div className='container-fluid HEADER w-100  '>
                <div className='row mt-3 '>
                    <div className='offset-2 logo col-2'>
                        <img src={logo_} alt='logo'/>
                    </div>
                    <button className='signin_btn offset-3  col-2   Lost'>
                        <p className='signin_btn_text Lost_text justify-content-center '><AiOutlineSearch/>I lost my pet</p>
                    </button>
                    <button className='signin_btn ml-3  col-2   Found  '>
                        <p className='signin_btn_text justify-content-center'><MdPets/>I found a pet</p>
                    </button>
                </div>
            </div>

        );

    }
    const renderBasicHeader = () => {
        return (
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
        );
    }
    return (

        <div className='jumbotron '>
            {renderLostFoundHeader()}
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
                        {renderInput()}
                    <div className='col-8 MAIN '><EditUser/></div>
                    {renderMapRightBar()}
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

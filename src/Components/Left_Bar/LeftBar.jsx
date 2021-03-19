import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './css_module/left_bar.css'
import pet_avatar from '../../utils/Images/petAvatar.png'
import {BsFillHouseFill} from "react-icons/bs";
import {GiMagnifyingGlass} from "react-icons/gi";
import {MdPets} from "react-icons/md";
import {IoIosNotificationsOutline} from "react-icons/io";
import {AiOutlineStar} from "react-icons/ai";
import {IoIosLogOut} from "react-icons/io";

const LeftBar = () => {
    return (
        <div className='container-fluid'>
            <div className='row-cols-6 text-center'>
                <ul className='nav flex-column col-2'>
                    <li className='nav-item'>
                        <BsFillHouseFill/> Home
                    </li>
                    <li className='nav-item'>
                        <GiMagnifyingGlass/> Lost
                    </li>
                    <li className='nav-item'>
                        <MdPets/> Found
                    </li>
                    <li className='nav-item'>
                        <IoIosNotificationsOutline/> Services
                    </li>
                    <li className='nav-item'>
                        <AiOutlineStar/> Favorites
                    </li>
                </ul>
            </div>
        </div>

    );
};

export default LeftBar;
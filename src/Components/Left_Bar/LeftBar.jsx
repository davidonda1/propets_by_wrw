import React from 'react';
import './css_module/left_bar.css'
import {pet_avatar} from "../../utils/constants/constants";
import {BsFillHouseFill  } from "react-icons/bs";
import { GiMagnifyingGlass } from "react-icons/gi";
import { MdPets} from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineStar } from "react-icons/ai";
import { IoIosLogOut } from "react-icons/io";
const LeftBar = () => {
    return (
        <div className="grid-container">
          <div className='main'>
            <div className="home">

                <p><BsFillHouseFill/>Home</p>
            </div>
            <div className="lost">

                <p> <GiMagnifyingGlass/>Lost</p>
            </div>
            <div className="found">

                <p><MdPets/>Found</p>
            </div>
            <div className="services">

                <p><IoIosNotificationsOutline/>Services</p>
            </div>
            <div className="favorites">

                <p><AiOutlineStar/>Favorites</p>
            </div>
              <div className="name_logout">
            <div className="avatar">
               <img src={pet_avatar} alt={pet_avatar}/>
                <p>Anna Smith</p>
            </div>

            <div className="logout">
                <p><IoIosLogOut/>Logout</p>
            </div>
              </div>
          </div>
        </div>

    );
};

export default LeftBar;
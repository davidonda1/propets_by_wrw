import React from 'react';
import '../css_module/header.css'
import '../css_module/header.css'
import {logo_} from "../../../utils/constants/constants";
import {AiOutlineSearch} from "react-icons/ai";
import {MdPets} from "react-icons/md";

const Header = () => {
    const renderNorm=()=>{
        return(
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
    const renderLostFoundHeader=()=>{
        return(
            <div className='container-fluid HEADER w-100  '>
                <div className='row mt-3 '>
                    <div className='offset-2 logo col-2'>
                        <img src={logo_} alt='logo'/>
                    </div>
                    <button className='signin_btn offset-3  col-2   Lost'>
                        <p className='signin_btn_text Lost_text justify-content-center '><AiOutlineSearch/>I lost my pet
                        </p>
                    </button>
                    <button className='signin_btn ml-3  col-2   Found  '>
                        <p className='signin_btn_text justify-content-center'><MdPets/>I found a pet</p>
                    </button>
                </div>
            </div>
        );
    }


    return (
       renderLostFoundHeader()
    );
};

export default Header;
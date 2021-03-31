import React from 'react';
import {HOME_PAGE, logo_} from "../../../../../utils/constants/constants";
import {AiOutlineSearch} from "react-icons/ai";
import {MdPets} from "react-icons/md";
import {useHistory} from "react-router-dom";
import '../css_module/header.css'

const Header = ({headerMode}) => {

    const history = useHistory();

    const renderNorm = () => {
        return (
            <div className='container-fluid HEADER  w-100 '>
                <div className='row'>
                    <div className='offset-2 logo col-2'>
                        <img src={logo_} alt='logo'/>
                    </div>
                </div>
            </div>
        );
    }

    const handleClickLost = () => {
        history.push(HOME_PAGE)
    }

    const handleClickFound = () => {
        history.push(HOME_PAGE)
    }

    const renderLostFoundHeader = () => {
        return (
            <div className='container-fluid HEADER w-100  '>
                <div className='row mt-3 '>
                    <div className='offset-2 logo col-2'>
                        <img src={logo_} alt='logo'/>
                    </div>
                    <button onClick={() => handleClickLost()} className='lost_btn offset-3  col-2 Lost'>
                        <p className='signin_btn_text Lost_text justify-content-center '><AiOutlineSearch/>I lost my pet
                        </p>
                    </button>
                    <button onClick={() => handleClickFound()} className='found_btn ml-3  col-2   Found  '>
                        <p className='signin_btn_text justify-content-center'><MdPets/>I found a pet</p>
                    </button>
                </div>
            </div>
        );
    }


    const header = () => {
        if (headerMode === 'lost') {
            return renderLostFoundHeader();
        } else {
            return renderNorm();
        }
    }

    return header();
};

export default Header;
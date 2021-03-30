import React, {useState} from 'react';
import pet from '../../../utils/Images/petImg.png';
import propetsSVG from '../../../utils/Images/propetsImg.svg';
import Register from '../components/Register/components/Register';
import {GiMagnifyingGlass} from "react-icons/gi";
import '../css_module/guest.css';

const Guest = () => {

    const [register, setRegister] = useState(false);

    const token = localStorage.getItem('token');

    const showFullPage = () => {
        if (!token) {
            return (
                <>
                    <div onClick={() => setRegister(true)} className="i_lost_pet">
                        <p className={'i_lost_text'}>I lost my pet! <GiMagnifyingGlass/></p>
                    </div>
                    <div onClick={() => setRegister(true)} className="i_found_pet">
                        <p className={'i_found_text'}>I found a pet!</p>
                    </div>
                    <div className="text">
                        <p className={'welcome_text'}>Welcome to your <br/>
                            <span className={'welcome_text_green'}>pawfessional</span><br/>
                            community</p>
                    </div>
                    <div className="pet">
                        <img src={pet} alt={'pet'}/>
                    </div>
                    <p className="join_text">
                        I’m okay, just want to
                        <span onClick={() => setRegister(true)} className={'join'}>join</span>
                        the pawsome community!
                    </p>
                </>
            );
        } else {
            return <label className="spinner-border text-success"/>
        }
    }


    return (
        <div className={`grid-container`}>
            <div className="header"></div>
            <div className="propets">
                <img src={propetsSVG} alt={'propet'}/>
            </div>
            <div className="sign_in">
                <button onClick={() => setRegister(!register)} className={'sign_in_button'}>Sign in</button>
            </div>
            {register ? <div className="main"><Register cancel={setRegister}/></div> :  showFullPage()}
            <div className="footer"></div>
        </div>
    );
};

// TODO footer

export default Guest;
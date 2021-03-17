import React from 'react';
import '../css_module/guest.css';
import pet from '../Images/petImg/petImg.png';
import propetsSVG from '../Images/propetsImg.svg';
import lupaSVG from '../Images/lupa.svg'

const Guest = () => {
    return (
        <div className="grid-container">
            <div className="header"></div>
            <div className="propets">
                <img src={propetsSVG} alt={'propet'}/>
            </div>
            <div className="sign_in">
                <button className={'sign_in_button'}>Sign in</button>
            </div>
            <div className="main"></div>
            <div className="i_lost_pet">
                <p className={'i_lost_text'}>I lost my pet!</p>
                <img className={'i_lost_pet_img'} src={lupaSVG} alt={'lupa'}/>
            </div>
            <div className="i_found_pet">
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
                I’m okay, just want to <span className={'join'}>join</span> the pawsome community!
            </p>
            <div className="footer"></div>
        </div>
    );
};
// TODO footer
export default Guest;
import React from 'react';
import Navigation from "./Navigation/Navigation";
import './css_module/left_bar.css'

const LeftBar = () => {
    return (
        <div className={'left_bar'}>
            <Navigation/>
            <div>
            {/*TODO*/}
            <img src={'#'} alt={'user'}></img>
            <p>Anna Smith</p>
            </div>
            <button>Logout</button>
        </div>
    );
};

export default LeftBar;
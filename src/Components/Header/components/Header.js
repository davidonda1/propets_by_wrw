import React from 'react';
import proPetsSVG from '../Images/proPets.svg';
import questionSVG from '../Images/question.svg';
import lupaSVG from '../Images/lupa.svg'
import '../css_module/header.css'
import Register from "../../Register/Register";
import LeftBar from "../../Left_Bar/LeftBar";
import RightBar from "../../RightBar/components/RightBar";

const Header = () => {
    return (

        <div className="grid-container">
            <div className="header"></div>
            <div className="register"><Register/></div>
            <div className="left"><LeftBar/></div>
            <div className="right"><RightBar/></div>
        </div>
      /*  <div className="grid-container">
            <div className="header"></div>
            <div className="register"><Register/></div>
        </div>*/
      /*  <div className="grid-container">
            <div className="header"><Register/></div>
        </div>*/



    );
};

export default Header;
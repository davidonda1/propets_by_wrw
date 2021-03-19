import React from 'react';
import '../css_modules/rightBarCssModule.css'
import pet from '../Images/petAvatar.png'
 import  add_2 from "../../../utils/Images/add2.png";

const RightBar = () => {
    return (


        <div className="container">
            <div className="main">

                <div className='add2'>
                    <img src={add_2} alt={'add_2'}/>
                </div>
            </div>
        </div>
    )
};

export default RightBar;
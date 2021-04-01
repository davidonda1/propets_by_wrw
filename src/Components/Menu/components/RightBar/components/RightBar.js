import React from 'react';
import '../css_modules/rightBarCssModule.css'
import add_2 from "../../../../../utils/Images/add2.png";

const RightBar = ({headerMode}) => {

    const renderNormBar = () => {
        return (
            <div className='col-2 offset-2 mt-5'>
                <img src={add_2} alt={add_2}/>
            </div>

        );
    }
    const renderMapBar = () => {
        return (
            <div className='col-2  mt-2 mr-2 mb-2'>
                <iframe className='iframe'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108513.53178060992!2d35.105319209952576!3d31.796445332286844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d7d634c1fc4b%3A0xd96f623e456ee1cb!2z0JjQtdGA0YPRgdCw0LvQuNC8!5e0!3m2!1sru!2sil!4v1616156400731!5m2!1sru!2sil"
                ></iframe>
            </div>
        );
    }

    const condition = () => {
        if (headerMode === 'lost') {
            return renderMapBar();
        } else {
            return renderNormBar();
        }

    }

    return (
        condition()
    );


};

export default RightBar;
import React from 'react';
import {FaStarOfDavid} from "react-icons/all";
import '../css_modules/hotels.css'
import {dog_hotel, pet_avatar} from "../../../../utils/constants/constants";

const Hotels = () => {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <p className='col-12 hotels_upper_text'><span>Hotels.</span> Go to vacations — we’ll take care of your
                    pet!</p>
                <div className='container shadow'>
                    <div className='row ml-5 mt-3'>
                        <div className='col-1'><img src={pet_avatar} alt='avatar'/></div>
                        <div className='row ml-3'>
                            <label className='hotels_user_name'>John Goodboi</label>
                            <label className='col-12 hotels_user_time'>2 h</label>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='mb-4'>
                            <img className='offset-1 col-10' src={dog_hotel} alt='hotel'/>
                        </div>
                        <div className='offset-1 mb-5 col-10'>
                            <p className='hotels_user_text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Consectetur dolorem, facere
                                illo libero nemo perspiciatis rem rerum sed sit unde! <span>...more</span></p>
                        </div>
                        <FaStarOfDavid className='offset-11 mb-4'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotels;
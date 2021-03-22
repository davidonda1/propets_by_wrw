import React from "react";
import {forstering_img, pet_avatar} from '../../../../utils/constants/constants'
import {AiFillStar, FaStarOfDavid} from "react-icons/all";
import '../css_module/fostering.css'


const Fostering = () => {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <p className='col-12 fostering_upper_text'><span>Fostering.</span> In adoption we trust.</p>
                <div className='container shadow'>
                    <div className='row ml-5 mt-3'>
                        <div><img src={pet_avatar} alt='avatar'/></div>
                        <label className='ml-2 fostering_user_name'>John Goodboi</label>
                        <label className='offset-1 col-12 fostering_user_time'>2 h</label>
                    </div>
                    <div className='row mt-4'>
                        <div className='offset-2 mb-4'>
                            <img src={forstering_img} alt='forstering'/>
                        </div>
                        <div className='offset-2 mb-5 col-7'>
                            <p className='fostering_user_text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolorem, facere
                                illo libero nemo perspiciatis rem rerum sed sit unde! <span>...more</span></p>
                        </div>
                        <FaStarOfDavid className='offset-11 mb-4 fostering_star'/>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Fostering;
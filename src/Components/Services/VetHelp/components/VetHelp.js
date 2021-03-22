import React from "react";
import {pet_avatar, vet_help} from "../../../../utils/constants/constants";
import {FaStarOfDavid} from "react-icons/all";
import '../css_modules/vet_help.css'

const VetHelp = () => {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <p className='col-12 vet_help_upper_text'><span>VetHelp.</span> They deserve it.</p>
            </div>
            <div className='container shadow'>
                <div className='row ml-5 mt-3'>
                    <div className='col-1'>
                        <img src={pet_avatar} alt='avatar'/></div>
                    <div className='row ml-3'>
                        <label className='vet_help_user_name'>John Goodboi</label>
                        <label className='col-12 vet_help_user_time'>2 h</label>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='mb-4'>
                        <img className='offset-1 col-10' src={vet_help} alt='vet_help'/>
                    </div>
                    <div className='offset-1 mb-5 col-10'>
                        <p className='vet_help_user_text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Consectetur dolorem, facere
                            illo libero nemo perspiciatis rem rerum sed sit unde! <span>...more</span></p>
                    </div>
                    <FaStarOfDavid className='offset-11 mb-4 vet_help_star'/>
                </div>
            </div>
        </div>
    );
};
export default VetHelp;
import React from 'react';
import '../css_module/editUser.css'
import pet from '../../../utils/Images/petAvatar.png'
import { GiDisc } from "react-icons/gi";
import { BiPencil } from "react-icons/bi";

const EditUser = () => {
    return (
        <div className='container'>
            <div className='container mt-3 ml-3'>
                <div className='row'>
                    <p className='p '><span className='span'>Your profile.</span> Change, edit and manage your data.</p>
                </div>
            </div>
            <div className='container mt-3 ml-3 c1 col-10 '>
                <div className='row Profiles'>
                    <div className='MyProfile col-6'>
                        <p className='MyProfile_p mt-2'>My profile</p>
                    </div>
                    <div className='Activites   col-6'>
                        <p className='Activites_p mt-2 '>Activites</p>
                    </div>
                </div>
                <div className='row Visit'>
                    <div className='img ml-2 mt-3 col-1'>
                        <img className='pet' src={pet} alt='pet'/>
                    </div>
                    <div className='p offset-1 col-2 mt-4 mr-2 '>
                        <p className='Name'>Anna Smith<span><BiPencil/></span></p>
                    </div>
                </div>
                <div className='row t1 mt-3 ml-3'>
                        <label className='i1' >Email:</label>
                        <input className='l1 ml-3 mb-2 col-6' type='text' placeholder='helenjohnson@gmail.com'/>
                </div>
                <div className='row t2 mt-3 ml-3'>
                    <label className='i2'>Phone:</label>
                    <input className='l2 ml-3 mb-2 col-6' type='text' placeholder='000-000-00-00'/>
                </div>
                <div className='row t3 mt-3 ml-3'>
                        <label className='i3'>FB link:</label>
                        <input className=' l3 ml-3 mb-2 col-6' type='text' placeholder='https://www.facebook.com/anna.smith908430'/>
                </div>
            </div>
            <div className='container mt-3 ml-3 '>
                <div className='row BTN'>
                    <button className='b1 offset-5 col-2'>Cancel</button>
                    <button className='b2 offset-1 col-2'><GiDisc/>Save changes</button>
                </div>
            </div>
        </div>
    );
};

export default EditUser;
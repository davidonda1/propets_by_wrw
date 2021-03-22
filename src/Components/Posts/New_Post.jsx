import React from 'react';
import './css_modules/new_post.css'
import {BsUpload} from "react-icons/all";
import {pet_avatar} from "../../utils/constants/constants";
import {FaPaw} from "react-icons/fa";

const New_Post = () => {
    return (
        <div className='container mt-5'>
            <header className='row'>
                <p className='col-12 new_post_upper_text'>Your new post! Simply text, add photos and publish.</p>
            </header>
            <div className='container shadow'>
                <div className='row'>
                    <div className='container'>
                        <div className='row mt-3'>
                            <label className='ml-4 col-2 text-right new_post_text'>Text<span
                                className='row'> up to 1500 char</span></label>
                            <textarea className=' col-9 new_post_text_area' minLength={1} maxLength={1500}
                                      placeholder='example text'></textarea>
                        </div>

                    </div>
                </div>
                <div className='row mt-5'>
                    <label className='ml-4 col-2 text-right new_post_photos'>Photos: <span className='row'>up to 4 images</span>
                    </label>
                    <div className='col-4 text-center'>
                        <BsUpload className='new_post_upload'/>
                        <p className='offset-2 col-8'>Drag and drop photos or</p>
                        <button className='new_post_browse'>Browse</button>
                    </div>
                    <div className='col-4 text-center'>
                        <BsUpload className='new_post_upload'/>
                        <p className='offset-2 col-8'>Drag and drop photos or</p>
                        <button className='new_post_browse'>Browse</button>
                    </div>
                </div>
                <footer className='row mt-5 pb-3'>
                    <img className='col-1' src={pet_avatar} alt='avatar'/>
                    <p className='new_post_user_name'>John Goodboi</p>
                    <button className='offset-7 new_post_publish_button'><FaPaw/> Publish</button>
                </footer>
            </div>
        </div>


    );
};

export default New_Post;
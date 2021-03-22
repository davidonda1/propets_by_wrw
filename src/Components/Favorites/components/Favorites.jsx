import React from 'react';
import {pet_avatar, posts} from '../../../utils/constants/constants'
import {FaStarOfDavid} from "react-icons/all";
import '../css_modules/favorites.css'

const Favorites = () => {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <p className='col-12 favorites_upper_text'><span>Your favorites.</span> Find them here anytime.</p>
            </div>
            {posts.map((item, index) => {
                if (item.liked) {
                    return (
                        <div className='container shadow'>
                            <div className='row ml-5 mt-3'>
                                <div className='col-1'>
                                    <img src={item.avatar  || pet_avatar} alt='avatar'/></div>
                                <div className='row ml-3'>
                                    <label className='favorites_user_name'>{item.user}</label>
                                    <label className='col-12 favorites_user_time'>{item.time}</label>
                                </div>
                            </div>
                            <div className='row mt-4'>
                                <div className='mb-4'>
                                    {item.img ?
                                        <img className='offset-3 col-12' src={item.img} alt='favorites'/>
                                        : <div></div>
                                    }
                                </div>
                                <div className='offset-2 mb-5 col-8'>
                                    <p className='favorites_user_text'>{item.text} <span>...more</span></p>
                                </div>
                                <FaStarOfDavid className='offset-11 mb-4 favorites_star'/>
                            </div>
                        </div>
                    )
                }
                }
            )}

            </div>
            );
            };

                export default Favorites;
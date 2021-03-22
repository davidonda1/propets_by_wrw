import React from 'react';
import {posts} from "../../utils/constants/constants";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Home/home.css'
import {BiDotsHorizontalRounded, FaStarOfDavid} from "react-icons/all";

const Home = () => {
    return (
        <div className='container'>
            {posts.map((item, index) =>
                <div key={index} className='container mt-5 mb-3 shadow'>
                    <div className='row'>
                        <img className='col-1' src={item.avatar} alt='avatar'/>
                        <p className='col-3 user_name'>{item.user}</p>
                        <BiDotsHorizontalRounded className=' mt-3 offset-7'/>
                    </div>
                    <div className='row'>
                        <p className='offset-1 col-1 user_time'>{item.time}</p>
                    </div>

                    <div className='row'>
                        <img src={item.img} alt='user' className='offset-2 user_img col-8'/>
                    </div>
                    <div className='row mt-3'>
                        <p className='offset-2 col-8 user_text'>{item.text} <span className='user_text_span'>...more</span></p>
                        <FaStarOfDavid className='offset-1'/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
import React from 'react';
import '../css_modules/find_lost_post.css'
import LeftBar from "../../Left_Bar/components/LeftBar";
import {FaPaw} from "react-icons/fa";
import {FaFileUpload} from "react-icons/fa";
import user_avatar from '../../../utils/Images/user_avatar.png'
import {GiPuppet} from "react-icons/gi";


const Lost_Post = () => {
    return (
        <div className="grid-container">
            <div className="upper_text">
                <p><span className='upper_text_span'></span> </p>
            </div>
            <div className="main"></div>
            <div className="type">
                <label>Type: </label>

            </div>
            <div className="dog">
                <select>
                    <option>Dog</option>
                </select>
            </div>
            <div className="sex">
                <label>Sex</label>
            </div>
            <div className="male">
                <select>
                    <option>Male</option>
                    <option>Female</option>
                </select>
            </div>
            <div className="breed">
                <label>Breed: </label>
            </div>
            <div className="golden_retriever">
                <input type='text' placeholder='Golden Retriever'/>
            </div>
            <div className="color">
                <label>Color: </label>
                <div><label>Height:</label></div>
            </div>
            <div className="white">
                <input type='text' placeholder='Beige'/>
                <select className='height_select'>
                    <option>45-70cm</option>
                    <option>very very big dog... be careful</option>
                </select>
            </div>
            <div className="features">
                <label>Distinctive features: </label>
            </div>
            <div className="features_area">
                <textarea placeholder='blue collar with stars, no left ear, damaged tail.'/>
            </div>
            <div className="man_dog">
                <GiPuppet/>
            </div>
            <div className="description">
                <label>Description: </label>
            </div>
            <div className="description_area">
                <textarea
                    placeholder='brown fox jumps over a lazy dog. DJs flock by when jhkjk jhgMTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs.'/>
            </div>
            <div className="files">

            </div>
            <div className="drag-and-drop">
                <FaFileUpload/>
                <p>Drag and drop photos or</p>
                <button className='drag-and-drop-btn'>Browse</button>
            </div>
            <div className="location">
                <label>Location: </label>
            </div>
            <div className="location_area">
                <input placeholder='Florentin Street, Tel Aviv' type='text'/>
            </div>
            <div className="browse">
            </div>
            <div className="contacts">
                <label>Contacts: </label>
            </div>
            <div className="phone">
                <input type='text' placeholder='Phone*'/>
            </div>
            <div className="email">
                <input type='email' placeholder='Email'/>
            </div>
            <div className="facebook">
                <input type='text' placeholder='Facebook Profile'/>
            </div>
            <div className="user_avatar">
                <img src={user_avatar} alt='user_avatar'/>
            </div>
            <div className="user_name">
                <p>{0 || 'John Goodboi'}</p>
            </div>
            <div className="publish">
                <p><FaPaw/> Publish</p>
            </div>
        </div>
    );
};

export default Lost_Post;
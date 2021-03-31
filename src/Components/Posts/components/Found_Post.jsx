import React, {useState} from 'react';
import '../css_modules/find_lost_post.css'
import man_with_pet from '../../../utils/Images/manWithPetImg.svg'
import {FaFileUpload} from "react-icons/fa";
import user_avatar from '../../../utils/Images/user_avatar.png'
import {AiOutlineArrowDown} from "react-icons/all";
const Found_Post = () => {

    const [object, setObject] = useState({
        type:'Dog',
        sex:'Male',
        height:'45 cm'
    });
    const handleClickInfo = (event, field) => {
        setObject((prevState) => ({...prevState, [field]: event.target.value}));
    }
    return (
        <div className='container'>
            <div className='container'>
                <div className='row'>
                    <div className=' col-12'>
                        <p className='HEADER_TEXT'>Found a pet? <span
                            className='pSpan'>Please complete the form to help.</span></p>
                    </div>
                </div>
            </div>
            <div className='container '>
                <img className='fixed-top offset-5 img_man  ' src={man_with_pet}/>
                <textarea className='textarea h col-1  offset-6  fixed-top '>img1.jpg X </textarea>
                <div className='row col-6 label_select'>
                    <label className='mr-3'>Type:</label>
                    <select onChange={(event)=>handleClickInfo(event,'type')} className='select mb-2'>
                        <option>Dog</option>
                        <option>Cat</option>
                        </select>
                        <AiOutlineArrowDown class='ml-3 mt-1'/>
                        </div>
                        <div className='row col-6 label_select'>
                        <label className='mr-2'>Sex:</label>
                        <select onChange={(event)=>handleClickInfo(event,'sex')}  className='select mb-2 ml-2'>
                        <option>Male</option>
                        <option>Female</option>
                        </select>
                        <AiOutlineArrowDown class='ml-1 mt-1'/>
                        </div>
                        <div className='row col-6 label_input'>
                        <label>Breed:</label>
                        <input onChange={(event)=>handleClickInfo(event,'breed')} className='input ml-3 mb-1' type='text' placeholder='Golden Retriever'/>
                        </div>
                        <div className='row col-6 label_input'>
                        <label>Color:</label>
                        <input onChange={(event)=>handleClickInfo(event,'color')} className='input ml-3 mb-1' type='text' placeholder='Beige'/>
                        </div>
                        <div className='row col-6 label_select'>
                        <label>Height:</label>
                        <select onChange={(event)=>handleClickInfo(event,'height')} className='select mb-2 ml-2'>
                        <option>45-70 cm</option>

                        </select>
                        <AiOutlineArrowDown class='mt-1'/>
                        </div>
                        <div className='row   '>
                        <label className='col-3 '>Distinktive features: <span className='green_small'></span></label>
                        <textarea onChange={(event)=>handleClickInfo(event,'distinktive_features')} className='textarea '>blue collar with stars, no left ear, damaged tail.</textarea>
                        </div>
                        <div className='row mt-2 '>
                        <label className='col-3 '>Description: <span
                        className='green_small'></span></label>
                        <textarea onChange={(event)=>handleClickInfo(event,'description')}   className='textarea_1 '>brown fox jumps over a lazy dog. DJs flock by when jhkjk jhgMTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs.</textarea>

                        </div>
                        <div className='row mt-2  '>
                        <label className='col-3 '>Location:</label>
                        <textarea onChange={(event)=>handleClickInfo(event,'location')} className='textarea'>Florentin Street, Tel Aviv</textarea>
                        <div>
                        <p className='col-6 offset-7 DRAG '><FaFileUpload/>Drag and drop photos or</p>
                        <button className='col-6 offset-7 BTN_around justify-content-center '><p
                        className='BTN justify-content-center'>Browse</p>
                        </button>
                        </div>
                        </div>
                        <div className='container mt-3'>
                        <div className='row mr-3'>
                        <label className='col-3'>Contacts:</label>
                        <input onChange={(event)=>handleClickInfo(event,'phone')} className='input' type='text' placeholder='Phone*'/>
                        <input onChange={(event)=>handleClickInfo(event,'email')} className='input ml-2' type='text' placeholder='Email'/>
                        <input onChange={(event)=>handleClickInfo(event,'facebook_profile')} className='input ml-2' type='text' placeholder='Facebook profile'/>

                        </div>
                        </div>
                        <div className='container mt-3'>
                        <div className='row mr-3'>
                        <img className='img' src={user_avatar}/>
                        <p className='HEADER_TEXT col-3 ml-2 mt-3'>John Goodboi</p>
                        <button className='col-2 offset-10 my_btn_around justify-content-center '><p
                        className='BTN_1 justify-content-center '>Publish</p>
                        </button>

                        </div>
                        </div>
                        </div>
                    {/* <div className='container'>

            </div>*/}
                        </div>
                        );
                    };

export default Found_Post;
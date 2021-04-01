import React from 'react';
import '../css_modules/find_lost_post.css'
import man_with_pet from '../../../utils/Images/manWithPetImg.svg'
import import_1 from '../../../utils/Images/question_1.svg'

import {FaPaw} from "react-icons/fa";
import {FaFileUpload} from "react-icons/fa";
import user_avatar from '../../../utils/Images/user_avatar.png'
import {AiOutlineArrowDown, RiDeleteBack2Fill} from "react-icons/all";
import {GiPuppet} from "react-icons/gi";
import {useState} from "react";
import {bindActionCreators} from "redux";
import {addInfo, getImg, newLostPet, putMessagee} from "../../../Redux/actions/lostFoundActions";
import {connect} from "react-redux";
import PublishPreview from "./Publish_Preview/components/Publish_Preview";

// import {FOUND_POST_TEXT} from "../../utils/constants/constants";


const Found_Post = ({addInfo, getImg, message, nickName, user_avatar, imgur,newLostPet}) => {
    const [images, setImages] = useState([]);
    const [edit, setEdit] = useState(true);
    const [object, setObject] = useState({
        type: 'Dog',
        sex: 'Male',
        height: '45 cm',
        images: [],
        address: {
            country: ''
        }
    });
    const handleClickInfo = (event, field) => {
        if (field === 'location') {
            const address = {
                country: event.target.value,
                city: event.target.value,
                street: event.target.value,
                building: 10

            }
            const location = {
                latitude: 31.78,
                longitude: 35.23
            }
            setObject((prevState) => ({...prevState, address, location}));
        } else {
            setObject((prevState) => ({...prevState, [field]: event.target.value}));
        }
    }

    const handleClickPublish = () => {
        if (images.length) {
            setObject(prevState => ({...prevState, imgur, tags: ['tag1', 'tag2', 'tag3']}));
            addInfo(object);
            setEdit(false);
            newLostPet(object);
        } else {
            alert('Error with photo')
        }

    }
    const handleClickImages = (event) => {
        const new_images = [...object.images];
        new_images.push(event.target.value);
        setObject(prevState => ({...prevState, images: new_images}));
        setImages([...images,event.target.value])
        getImg(event.target.files[0]);
    }
    const handleClickDelete = (item) => {
        const index = object.images.indexOf(item);
        const new_images = [...object.images];
        new_images.splice(index, 1);
        setObject(prevState => ({...prevState, images: new_images}))
    }
    const editRender = () => {
        return (
            <div className='container '>
                <div className='container '>
                    <div className='row'>
                        <div className=' col-12'>
                            <p className='HEADER_TEXT'>Found a pet? <span
                                className='pSpan'>Please complete the form to help.</span></p>
                        </div>
                    </div>
                </div>
                <div className='container '>
                    <img className='fixed-top offset-6 img_man  ' src={man_with_pet}/>
                    <div className='textarea h col-1  offset-7  fixed-top '>{
                        object.images.map(item => <p key={item}>{item}<span
                            onClick={() => handleClickDelete(item)}><RiDeleteBack2Fill/></span></p>)
                    }</div>
                    <div className='row col-6 label_select'>
                        <label className='mr-3'>Type:</label>
                        <select value={object.type} onChange={(event) => handleClickInfo(event, 'type')}
                                className='select mb-2'>
                            <option>Dog</option>
                            <option>Cat</option>
                        </select>
                        <AiOutlineArrowDown className='ml-3 mt-1'/>
                    </div>
                    <div className='row col-6 label_select'>
                        <label className='mr-2'>Sex:</label>
                        <select value={object.sex} onChange={(event) => handleClickInfo(event, 'sex')}
                                className='select mb-2 ml-2'>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                        <AiOutlineArrowDown className='ml-1 mt-1'/>
                    </div>
                    <div className='row col-6 label_input'>
                        <label>Breed:</label>
                        <input onChange={(event) => handleClickInfo(event, 'breed')} className='input ml-3 mb-1'
                               type='text'
                               placeholder='Golden Retriever' value={object.breed}/>
                    </div>
                    <div className='row col-6 label_input'>
                        <label>Color:</label>
                        <input onChange={(event) => handleClickInfo(event, 'color')} className='input ml-3 mb-1'
                               type='text'
                               placeholder='Beige' value={object.color}/>
                    </div>
                    <div className='row col-6 label_select'>
                        <label>Height:</label>
                        <select value={object.height} onChange={(event) => handleClickInfo(event, 'height')}
                                className='select mb-2 ml-2'>
                            <option>45-70 cm</option>

                        </select>
                        <AiOutlineArrowDown className='mt-1'/>
                    </div>
                    <div className='row   '>
                        <label className='col-3 '>Distinktive features: <span className='green_small'></span></label>
                        <textarea onChange={(event) => handleClickInfo(event, 'distinktive_features')}
                                  className='textarea ' value={object['distinktive_features']}
                                  placeholder='blue collar with stars, no left ear, damaged tail.'/>
                    </div>
                    <div className='row mt-2 '>
                        <label className='col-3 '>Description: <span
                            className='green_small'></span></label>
                        <textarea onChange={(event) => handleClickInfo(event, 'description')} className='textarea_1 '
                                  value={object.description}
                                  placeholder='brown fox jumps over a lazy dog. DJs flock by when jhkjk jhgMTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs.'></textarea>

                    </div>
                    <div className='row mt-2  '>
                        <label className='col-3 '>Location:</label>
                        <textarea onChange={(event) => handleClickInfo(event, 'location')} className='textarea'
                                  value={object.address.country || ''}/>
                        <div>
                            <p className='col-6 offset-2 DRAG '><FaFileUpload/>Drag and drop photos or</p>
                            {message ? <label className='spinner-border text-success'/> : <label/>}
                            <input onChange={(event) => handleClickImages(event)}
                                   className='col-6 offset-2 BTN_around justify-content-center ' type='file' name='file'/>
                        </div>
                    </div>
                    <div className='container mt-3'>
                        <div className='row mr-3'>
                            <label className='col-3'>Contacts:</label>
                            <input onChange={(event) => handleClickInfo(event, 'phone')} className='input' type='text'
                                   placeholder='Phone*' value={object.phone}/>
                            <input onChange={(event) => handleClickInfo(event, 'email')} className='input ml-2'
                                   type='text'
                                   placeholder='Email' value={object.email}/>
                            <input onChange={(event) => handleClickInfo(event, 'facebook_profile')}
                                   className='input ml-2'
                                   type='text' placeholder='Facebook profile' value={object.facebook_profile || ''}/>

                        </div>
                    </div>
                    <div className='container mt-3'>
                        <div className='row mr-3'>
                            <img className='img' src={user_avatar}/>
                            <p className='HEADER_TEXT col-3 ml-2 mt-3'>{nickName}</p>
                            <button onClick={() => handleClickPublish()}
                                    className='col-2 offset-10 my_btn_around justify-content-center '><p
                                className='BTN_1 justify-content-center '>Publish</p>
                            </button>

                        </div>
                    </div>
                </div>
                {/* <div className='container'>

            </div>*/}
            </div>
        )
    }

    const publishRender = () => {
        return <PublishPreview setEdit={setEdit}/>
    }
    return (
        edit ? editRender() : publishRender()
    );

};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addInfo, getImg,putMessagee,newLostPet}, dispatch)
}
const mapStateToProps = (state) => {
    return {
        user_avatar:state.accountingReducer.user_avatar,
        nickName:state.accountingReducer.nickName,
        message:state.lostFoundReducer.message,
        imgur:state.lostFoundReducer.images
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Found_Post);
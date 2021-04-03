import React, {useState} from 'react';
import {FaFileUpload} from "react-icons/fa";
import {bindActionCreators} from "redux";
import {putLost, getImg, putMessage} from "../../../Redux/actions/postActions";
import {connect} from "react-redux";
import {AiOutlineArrowDown, RiDeleteBin2Fill} from "react-icons/all";
import man_with_pet from "../../../utils/Images/manWithPetImg.svg";
import '../css_modules/find_lost_post.css';
import PublishPreview from "./Publish_Preview/components/Publish_Preview";

const Lost_Post = ({putLost, getImg, nickName, user_avatar, message, imgur}) => {


    const [images, setImages] = useState([]);
    const [edit, setEdit] = useState(true);

    const [info, setInfo] = useState({
        type: 'dog',
        sex: 'male',
        height: '45-70',
        address: {
            country: ''
        },
    });

    const handleClickDelete = (item) => {
        const elemIndex = images.indexOf(item);
        setImages(prevState => prevState.splice(elemIndex, 1));
    }

    const handleClickPublish = () => {
        if (!info.location) {
            alert('Enter location info');
            return;
        }
        if (images.length) {
            setInfo(prevState => ({...prevState, imgur, tags: ['tag1', 'tag2', 'tag3']}));
            putLost(info);
            setEdit(false);
        } else {
            alert('Put some photos');
        }
    }

    const handleClickInfo = (event, field) => {
        if (field === 'location') {
            const address = {
                country: event.target.value,
                city: event.target.value,
                street: event.target.value,
                building: 10
            };
            const location = {
                latitude: 13.22,
                longitude: 12.88,
            };
            setInfo((prevState) => ({...prevState, address, location}));
        } else {
            setInfo((prevState) => ({...prevState, [field]: event.target.value}));
        }
    }


    const editRender = () => {
        return (
            <div className='container'>
                <div className='container'>
                    <div className='row'>
                        <div className=' col-12'>
                            <p className='HEADER_TEXT'>Found a pet? <span
                                className='p_span'>Please complete the form to help.</span></p>
                        </div>
                    </div>
                </div>
                <div className='container shadow pb-3'>
                    <img className='fixed-top offset-6 img_man' src={man_with_pet} alt='man_with_pet'/>
                    <div className='textarea h col-1  offset-7  fixed-top'>
                        {images.map((item) => <label key={item}>{item}<span
                            onClick={() => handleClickDelete(item)}><RiDeleteBin2Fill/></span> </label>)}
                    </div>
                    <div className='row col-6 label_select'>
                        <label className='mr-3'>Type:</label>
                        <select value={info.type} onChange={(event) => handleClickInfo(event, 'type')}
                                className='select mb-2'>
                            <option>Dog</option>
                            <option>Cat</option>
                        </select>
                        <AiOutlineArrowDown className='ml-3 mt-1'/>
                    </div>
                    <div className='row col-6 label_select'>
                        <label className='mr-2'>Sex:</label>
                        <select value={info.sex}
                            onChange={(event) => handleClickInfo(event, 'sex')}
                                className='select mb-2 ml-2'>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                        <AiOutlineArrowDown className='ml-1 mt-1'/>
                    </div>
                    <div className='row col-6 label_input'>
                        <label>Breed:</label>
                        <input value={info.breed || ''}
                            onChange={(event) => handleClickInfo(event, 'breed')} className='input ml-3 mb-1'
                               type='text' placeholder='Golden Retriever'/>
                    </div>
                    <div className='row col-6 label_input'>
                        <label>Color:</label>
                        <input value={info.color || ''}
                            onChange={(event) => handleClickInfo(event, 'color')} className='input ml-3 mb-1'
                               type='text' placeholder='Beige'/>
                    </div>
                    <div className='row col-6 label_select'>
                        <label>Height:</label>
                        <select onChange={(event) => handleClickInfo(event, 'height')} className='select mb-2 ml-2'>
                            <option>45-70 cm</option>
                        </select>
                        <AiOutlineArrowDown className='mt-1'/>
                    </div>
                    <div className='row'>
                        <label className='col-3 '>Distinktive features: <span className='green_small'/></label>
                        <textarea value={info.features || ''}
                            onChange={(event) => handleClickInfo(event, 'features')} className='textarea'
                                  placeholder='blue collar with stars, no left ear, damaged tail.'/>
                    </div>


                    <div className='row mt-2 '>
                        <label className='col-3 '>Description: <span
                            className='green_small'/></label>
                        <textarea value={info.description || ''}
                            onChange={(event) => handleClickInfo(event, 'description')} className='textarea_1'
                                  placeholder='brown fox jumps over a lazy dog. DJs flock by when jhkjk jhgMTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs.'/>
                    </div>
                    <div className='row mt-2'>
                        <label className='col-3'>Location:</label>
                        <textarea value={info.address.country || ''}
                            onChange={event => handleClickInfo(event, 'location')} className='textarea'
                                  placeholder='Florentin Street, Tel Aviv'/>
                        <div>

                            <p className='col-6 offset-2 DRAG '><FaFileUpload/>Drag and drop photos or</p>
                            <input type='file' name='file'
                                   className='col-6 offset-2 lost_input_file BTN_around justify-content-center BTN justify-content-center'
                                   onChange={(event) => {
                                       setImages([...images, event.target.value])
                                       getImg(event.target.files[0])
                                   }}/>
                            {message ? <label className="spinner-border mt-5 offset-4 text-success"/> : <label/>}
                        </div>
                    </div>
                    <div className='container mt-3'>
                        <div className='row mr-3'>
                            <label className='col-3'>Contacts:</label>
                            <input className='input' type='text' placeholder='Phone*'/>
                            <input className='input ml-2' type='text' placeholder='Email'/>
                            <input className='input ml-2' type='text' placeholder='Facebook profile'/>

                        </div>
                    </div>
                    <div className='container mt-3'>
                        <div className='row mr-3'>
                            <img className='img' src={user_avatar} alt='user_avatar'/>
                            <p className='HEADER_TEXT col-3 ml-2 mt-3'>{nickName}</p>
                            <button onClick={() => handleClickPublish()}
                                    className='col-2 offset-10 my_btn_around justify-content-center '><p
                                className='BTN_1 justify-content-center '>Publish</p>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const publishRender = () => {
        return <PublishPreview setEdit={setEdit}/>
    }

    return (
        edit ? editRender() : publishRender()
    )
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({putLost, getImg, putMessage}, dispatch);
}

const mapStateToProps = state => {
    return {
        user_avatar: state.accountingReducer.user_avatar,
        nickName: state.accountingReducer.nickName,
        message: state.lost_found_post_reducer.message,
        imgur: state.lost_found_post_reducer.images,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lost_Post);
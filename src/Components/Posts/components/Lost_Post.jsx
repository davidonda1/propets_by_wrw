import React, {useState} from 'react';
import '../css_modules/find_lost_post.css'
import {FaPaw} from "react-icons/fa";
import {FaFileUpload} from "react-icons/fa";
import {GiPuppet} from "react-icons/gi";
import {bindActionCreators} from "redux";
import {lostPost, getImg} from "../../../Redux/actions/postActions";
import {connect} from "react-redux";
import {RiDeleteBin2Fill} from "react-icons/all";
import Publish_Preview from "../../Publish_Preview/components/Publish_Preview";


const Lost_Post = ({lostPost, getImg, nickName, user_avatar, message}) => {


    const [images, setImages] = useState([]);
    const [edit, setEdit] = useState(true);

    const info = {
        "userName": "Anna Smith",
        "avatar": "https://www.gravatar.com/avatar/0?d=mp",
        "type": "cat",
        "sex": "male",
        "breed": "british",
        "location": {
            "country": "Israel",
            "city": "Tel Aviv",
            "street": "Herzel",
            "building": 10,
            "latitude": 31.78,
            "longitude": 35.23
        },
        "tags": ["tag1", "tag2", "tag3", "color1", "color2"]
    }

    const handleClickPublish = () => {
        if (images.length) {
            lostPost(info);
            setEdit(false);
        } else {
            alert('Put some photos');
        }
    }


    const editRender = () => {
        return (
            <div className="grid-container">
                <div className="upper_text">
                    <p><span className='upper_text_span'></span></p>
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
                    {images.map(item => <div key={item}>{item} <RiDeleteBin2Fill/></div>)}
                </div>
                <div className="drag-and-drop">
                    <FaFileUpload/>
                    <p>Drag and drop photos or</p>
                    {message ? <label className="spinner-border text-success"></label> : <label/>}
                    <input name='myFile' onChange={(event) => {
                        setImages([...images, event.target.value])
                        getImg(event.target.files[0])
                    }} type='file'/>
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
                    <input type='text' placeholder='Facebook EditUser'/>
                </div>
                <div className="user_avatar">
                    <img src={user_avatar} alt='user_avatar'/>
                </div>
                <div className="user_name">
                    <p>{nickName}</p>
                </div>
                <div onClick={() => handleClickPublish()} className="publish">
                    <p><FaPaw/> Publish</p>
                </div>
            </div>
        )
    }

    const publishRender = () => {
        return <Publish_Preview setEdit={setEdit}/>
    }

    return (
        edit ? editRender() : publishRender()
    );
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({lostPost, getImg}, dispatch);
}

const mapStateToProps = state => {
    return {
        user_avatar: state.accountingReducer.user_avatar,
        nickName: state.accountingReducer.nickName,
        message: state.lost_found_post_reducer.message,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lost_Post);
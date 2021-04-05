import React from 'react';
import {VscLocation} from "react-icons/vsc";
import {AiFillPhone, AiFillFacebook, AiFillMail, AiFillEdit} from "react-icons/ai";
import {FaPaw} from "react-icons/fa";
import {connect} from "react-redux";
import '../css_module/preview.css';
import {bindActionCreators} from "redux";
import {lostOrFoundPost} from "../../../../../Redux/actions/postFoundActions";
import {useHistory} from "react-router-dom";
import {HOME_PAGE} from "../../../../../utils/constants/constants";

const PublishPreview = ({pet_info, images, setEdit, avatar, userName,page, lostOrFoundPost}) => {

    const history = useHistory();

    return (
        <div className="publish_container">
            <div className="publish_main">
                <div className="preview_post">
                    <div className="preview_main">
                        <div className="dog_text">
                            <h2>{pet_info.type}, {pet_info.breed}</h2>
                        </div>
                        <div className="color">
                            <p><span>Color: </span>golden</p>
                        </div>
                        <div className="sex">
                            <p><span>Sex: </span>{pet_info.sex}</p>
                        </div>
                        <div className="features">
                            <p>Distinctive features: <span> blue collar with stars, no left ear, damaged tail.</span>
                            </p>
                        </div>
                        <div className="height">
                            <p><span>Height: </span>45cm</p>
                        </div>
                        <div className="description">
                            <p>Description: <span>brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs.</span>
                            </p>
                        </div>
                        <div className="dog_photo w-100 h-50">
                            <img src={images[0]} alt='dog'/>
                        </div>
                        <div className="location">
                            <p><VscLocation/><span>{pet_info.address.street}, {pet_info.address.building}, {pet_info.address.city}, {pet_info.address.country}</span></p>
                        </div>
                        <div className="user">
                            <img src={avatar} alt='user_avatar'/>
                            <div className="user_name">
                                <p>{userName}</p>
                            </div>
                        </div>
                        <div className="icons">
                            <AiFillPhone/>
                            <AiFillFacebook/>
                            <AiFillMail/>
                        </div>
                    </div>
                    <div className="bottom_text">
                        <div className="text">
                            <p>Fingers crossed. We wish your fluffy to be found as soon as possible. <br/>
                                Your post will expire in two weeks. To make it active again follow the<br/>
                                instructions you’ll get in email.</p>
                        </div>
                    </div>
                    <div className="edit" onClick={() => setEdit(true)}>
                        <button><AiFillEdit/>Edit</button>
                    </div>
                    <div onClick={() => {
                        lostOrFoundPost(pet_info, page)
                        history.push(HOME_PAGE)
                    }} className="publish">
                        <button><FaPaw/>Publish</button>
                    </div>
                    <div className="share">
                        <input type='checkbox'/>
                        <div className="share_text">
                            <p>Share to Facebook</p>
                        </div>
                    </div>
                    <div className="footer_text"/>
                    <div className="upper_text">
                        <p><span>Preview and Publish.</span> Please share the post to your FB to be more effective.</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

const mapStateToProps = state => {
    return {
        images: state.lost_found_post_reducer.images,
        pet_info: state.lost_found_post_reducer.petInfo,
        avatar: state.accountingReducer.user_avatar,
        userName: state.accountingReducer.nickName,
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({lostOrFoundPost}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PublishPreview);
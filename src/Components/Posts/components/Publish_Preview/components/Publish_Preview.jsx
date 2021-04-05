import React from 'react';
import {VscLocation} from "react-icons/vsc";
import {AiFillPhone, AiFillFacebook, AiFillMail, AiFillEdit} from "react-icons/ai";
import {FaPaw} from "react-icons/fa";
import {connect} from "react-redux";
import '../css_module/preview.css';
import {bindActionCreators} from "redux";
import {lostPost, putLost} from '../../../../../Redux/actions/postActions';
import {useHistory} from "react-router-dom";
import {LOST_PAGE} from "../../../../../utils/constants/constants";

const PublishPreview = ({pet_info, images, setEdit, avatar, userName, lostPost}) => {

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
                            <p>Distinctive features: <span> {pet_info.features}</span>
                            </p>
                        </div>
                        <div className="height">
                            <p><span>Height: </span>{pet_info.height}</p>
                        </div>
                        <div className="description">
                            <p>Description: <span>{pet_info.description}</span>
                            </p>
                        </div>
                        <div className="dog_photo w-50 h-50">
                            <img className='preview_pet_img' src={images[0]} alt='dog'/>
                        </div>
                        <div className="location">
                            <p>
                                <VscLocation/><span>{pet_info.address.street}</span>
                            </p>
                        </div>
                        <div className="user mb-2">
                            <img className='left_user_avatar' src={avatar} alt='user_avatar'/>
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
                        lostPost(pet_info)
                        putLost('');
                        history.push(LOST_PAGE)
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
    return bindActionCreators({lostPost, putLost}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PublishPreview);
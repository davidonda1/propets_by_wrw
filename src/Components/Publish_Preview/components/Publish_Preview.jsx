import React from 'react';
import '../css_module/preview.css'
import dog from '../../../utils/Images/preview_dog.png'
import {VscLocation} from "react-icons/vsc";
import user_avatar from '../../../utils/Images/user_avatar.png'
import {AiFillPhone, AiFillFacebook, AiFillMail, AiFillEdit} from "react-icons/ai";
import {FaPaw} from "react-icons/fa";

const PublishPreview = () => {
    return (
        // <div>
        //     <header>
        //         <p>Preview and Publish. Please share the post to your FB to be more effective.
        //         </p>
        //     </header>
        //     <Lost_Post/>
        //     <footer>
        //         <p>Fingers crossed. We wish your fluffy to be found as soon as possible. Your post will expire in two weeks. To make it active again follow the instructions you’ll get in email.</p>
        //         <input type={'checkbox'}/>
        //         <label>Share to Facebook</label>
        //         <button>Edit</button>
        //         <button>Publish</button>
        //         <p>By clicking “Publish”, you agree to us processing your information in accordance with these terms.</p>
        //     </footer>
        //   <p>Preview and Publish. Please share the post to your FB to be more effective.</p>
        // </div>
        <div className="grid-container">
            <div className="main">
                <div className="preview_post">
                    <div className="preview_main">
                        <div className="dog_text">
                            <h2>Dog, Golden Retriever</h2>
                        </div>
                        <div className="color">
                            <p><span>Color: </span>golden</p>
                        </div>
                        <div className="sex">
                            <p><span>Sex: </span>male</p>
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
                        <div className="dog_photo">
                            <img src={dog} alt='dog'/>
                        </div>
                        <div className="location">
                            <p><VscLocation/><span>Florentin, 27, Tel Aviv</span></p>
                        </div>
                        <div className="user">
                            <img src={user_avatar} alt='user_avatar'/>
                            <div className="user_name">
                                <p>John Goodboi</p>
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
                    <div className="edit">
                        <button><AiFillEdit/>Edit</button>
                    </div>
                    <div className="publish">
                        <button><FaPaw/>Publish</button>
                    </div>
                    <div className="share">
                        <input type='checkbox'/>
                        <div className="share_text">
                            <p>Share to Facebook</p>
                        </div>
                    </div>
                    <div className="footer_text"></div>
                    <div className="upper_text">
                        <p><span>Preview and Publish.</span> Please share the post to your FB to be more effective.</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PublishPreview;
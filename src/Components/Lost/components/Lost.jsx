import React, {useEffect} from 'react';
import {AiFillFacebook} from "react-icons/ai";
import {AiOutlineMessage, AiOutlinePhone, IoLocationOutline} from "react-icons/all";
import '../css_module/lost.css'
import {bindActionCreators} from "redux";
import {getLostPosts} from "../../../Redux/actions/postActions";
import {connect} from "react-redux";

const Lost = ({getPosts, posts}) => {

    useEffect(() => {
        getPosts();
    }, [])

    const renderInput = () => {
        return (
            <div className='container INPUT_HEADER mb-3 mt-3'>
                <div className='row INPUT mt-3 mb-3'>
                    <input className='INPUT_text pl-2' type='text ' placeholder='Type '/>
                    <input className='INPUT_text pl-2' type='text ' placeholder='Breed'/>
                    <input className='INPUT_text pl-2' type='text ' placeholder='Additional features'/>
                    <input className='INPUT_text pl-2' type='text ' placeholder='Location'/>
                </div>

            </div>
        );
    }


    const renderLostPost = () => {
        if (posts) {
            return (
                posts.map(item => {
                    return (
                        <div key={item.id} className='container lost_posts shadow ALL mt-1 mb-4'>
                            <div className='row'>
                                <img className='col-5 mt-3 mb-3 lost_post_image' src={item.photos[0]} alt='lost_pet'/>
                                <div className='container col-6'>
                                    <div className='row mt-3 mb-3'>
                                        <p className='INFO '>{item.type}, {item.breed}</p>
                                    </div>
                                    <div className='row P'>
                                        <div className='row col-4 text-left'>
                                            <p><span>Color:</span> white</p>
                                            <p className='offset-1'><span>Sex:</span> {item.sex}</p>
                                            <p><span>Height:</span> 45cm</p>
                                        </div>
                                        <div className='row col-6'>
                                            <p className=''>
                                                <span>Distinctive features: </span> blue collar with stars, no left ear,
                                                damaged tail.</p>
                                        </div>
                                        <div className='row'>
                                            <p className=''><span>Description:</span>
                                                 brown fox jumps over a lazy dog. DJs flock by when MTV ax
                                                    quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz,
                                                    vex nymphs.
                                            </p>
                                        </div>

                                    </div>
                                    <div className='row'>
                                        <p><IoLocationOutline
                                            color='black'/> {item.address.country}
                                        </p>
                                    </div>
                                    <div className='row POINTER'>
                                        <p className='col-8'><img className='left_user_avatar' src={item.avatar}
                                                                  alt='pet_avatar'/><span>{item.userName}</span></p>
                                        <p className='col-4'><AiOutlinePhone/><AiFillFacebook/><AiOutlineMessage/></p>
                                    </div>
                                    <div className='row'>
                                        <p className='clock'>{item.datePost}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            );
        } else {
            return <span className='spinner-grow offset-6 spinner_lost text-success'/>
        }
    }
    return (
        <div>
            {renderInput()}
            {renderLostPost()}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        posts: state.lost_found_post_reducer.posts
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({getPosts: getLostPosts}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Lost);
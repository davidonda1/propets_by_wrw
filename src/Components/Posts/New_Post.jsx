import React from 'react';
import './css_modules/preview_post.css'

const New_Post = () => {
    return (
        <div>
                <header>
                        <h2>Your new post! Simply text, add photos and publish.</h2>
                </header>
                <div>
                        <label>Text</label>
                        <span>up to 1500 char</span>
                        <textarea minLength={1} maxLength={1500} placeholder={'example text'}></textarea>
                </div>
                <div>
                        <label>Photos: </label>
                        <span>up to 4 images</span>
                        <input className={'input'} type={'file'}/>
                        <p>Drag and drop photos or</p>
                        <button>Browse</button>
                </div>
                <footer>
                        <p>John Goodboi</p>
                        <button>Publish</button>
                </footer>
        </div>


    );
};

export default New_Post;
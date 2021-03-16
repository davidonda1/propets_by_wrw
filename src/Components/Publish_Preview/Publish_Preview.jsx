import React from 'react';
import Post from "../Posts/Post";

const PublishPreview = () => {
    return (
        <div>
            <header>
                <p>Preview and Publish. Please share the post to your FB to be more effective.
                </p>
            </header>
            <Post/>
            <footer>
                <p>Fingers crossed. We wish your fluffy to be found as soon as possible. Your post will expire in two weeks. To make it active again follow the instructions you’ll get in email.</p>
                <input type={'checkbox'}/>
                <label>Share to Facebook</label>
                <button>Edit</button>
                <button>Publish</button>
                <p>By clicking “Publish”, you agree to us processing your information in accordance with these terms.</p>
            </footer>
        </div>
    );
};

export default PublishPreview;
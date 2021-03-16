import React from 'react';
import {posts} from '../../utils/constants/constants'
const Favorites = () => {
    return (
        <div>
            <h2>Your favorites. Find them here anytime.</h2>
            {posts.map((item, index) =>
                <div key={'index'}>
                    <p>{item.user}</p>
                    <p>{item.time}</p>
                    <p>{item.img}</p>
                    <p>{item.text}</p>
                </div>)}
        </div>
    );
};

export default Favorites;
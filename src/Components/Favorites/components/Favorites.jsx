import React from 'react';
import {posts} from '../../../utils/constants/constants'

const Favorites = () => {
    return (
        <div>
            {posts.map((item, index) => {
                    if (item.liked) {
                        <div key={'index'}>
                            <p>{item.user}</p>
                            <p>{item.time}</p>
                            <p>{item.img}</p>
                            <p>{item.text}</p>
                        </div>
                    }
                }
            )}
        </div>
    );
};

export default Favorites;
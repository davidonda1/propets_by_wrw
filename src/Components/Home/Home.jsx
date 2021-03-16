import React from 'react';
import {posts} from "../../utils/constants/constants";

const Home = () => {
    return (
        <>
            {posts.map((item, index) =>
                <div key={'index'}>
                    <p>{item.user}</p>
                    <p>{item.time}</p>
                    <p>{item.img}</p>
                    <p>{item.text}</p>
                </div>
            )}
        </>
    );
};

export default Home;
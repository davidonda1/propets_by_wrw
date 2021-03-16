import React from 'react';
import Post from "../Posts/Post";

const Lost = () => {
    return (
        <div>
            <header>
                <input type={'text'} placeholder={'Type'}/>
                <input type={'text'} placeholder={'Breed'}/>
                <input type={'text'} placeholder={'Additional features'}/>
                <input type={'text'} placeholder={'Location'}/>
            </header>
            <main>
                <Post/>
            </main>
        </div>
    );
};

export default Lost;
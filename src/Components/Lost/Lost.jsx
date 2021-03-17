import React from 'react';
import Lost_Post from "../Posts/Lost_Post";

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
                <Lost_Post/>
            </main>
        </div>
    );
};

export default Lost;
import React from 'react';
import '../css_module/guest.css'
import pet from '../Images/petImg/petImg.png';
import propetsSVG from '../Images/propetsImg.svg';
import lupaSVG from '../Images/lupa.svg'

const Guest = () => {
    return (
        <div className={'grid'}>
            <header className={'grid-item'}>
                <div className={'pro_pets'}>
                    <img src={propetsSVG}/>
                    {/*TODO svg*/}
                </div>
                <div className={'sign_in'}>
                    <button>Sign in</button>
                </div>
            </header>
            <main className={'grid-item '}>
                <div >
                    <p>Welcome to your pawfessional community</p>
                </div>
                <div className={'pet'}>
                    <img src={pet}/>
                </div>
                <div>
                    <button>I lost my pet!</button>
                    <img src={lupaSVG}/>
                </div>
                <div>
                    <button>I found a pet!</button>
                </div>
                <div >
                    {/*TODO link*/}
                    <p>I’m okay, just want to {/*<a href='' join/>*/} the pawsome community!</p>
                </div>

            </main>
            <footer className={'grid-item'}>
                {/*ToDo footer*/}

            </footer>
        </div>
    )
        ;
};

export default Guest;
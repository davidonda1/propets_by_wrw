import React from 'react';
import '../css_module/guest.css'
import pet from '../Images/petImg/petImg.png';
import propetsSVG from '../Images/propetsImg.svg';
import lupaSVG from '../Images/lupa.svg'

const Guest = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='container-'>
                    <header className='row'>
                        <div className=' col-2'>
                            <img src={propetsSVG}/>
                            {/*TODO svg*/}
                        </div>
                        <div className='offset-6 col-2'>
                            <button>Sign in</button>
                        </div>

                    </header>
                </div>
            </div>
                <main className='row'>
                    <div className='container'>
                        <div className='row'>
                    <div>
                        <p>Welcome to your pawfessional community</p>
                    </div>
                    <div>
                        <img src={pet}/>
                    </div>
                    <div>
                        <button>I lost my pet!</button>
                        <img src={lupaSVG}/>
                    </div>
                    <div>
                        <button>I found a pet!</button>
                    </div>
                    <div>
                        {/*TODO link*/}
                        <p>I’m okay, just want to {/*<a href='' join/>*/} the pawsome community!</p>
                    </div>
                    </div>
                    </div>
                </main>
                <footer>
                    {/*ToDo footer*/}

                </footer>


        </div>
    )
        ;
};

export default Guest;
import React from 'react';

const FastTravelSection = () => {
    return (
        <div className='container mt-5'>
            <div className='row align-items-center'>
                <div className='col-6'>
                    <h1>FAST TRAVEL</h1>
                    <p>
                        We’ll get you to your adventure in no time with our new luxury rockets that
                        travel at the speed of light!
                    </p>
                </div>
                <img
                    className='col-6 p-0'
                    className='details__img'
                    src='assets/images/spaceship.png'></img>
            </div>
        </div>
    );
};

export default FastTravelSection;

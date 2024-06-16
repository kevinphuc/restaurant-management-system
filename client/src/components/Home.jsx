import React from 'react';
import Button from '../layouts/Button.jsx';
import { clientURL } from '../App.js';

const Home = () => {
    return (
        <div className='min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-image-6 bg-right bg-cover bg-no-repeat'>
            <div className='w-full space-y-5 lg:pt-20'>
                <h1 className='text-backgroundColor font-semibold text-6xl'>
                    Elevate Your Inner Foodie with Every Bite.
                </h1>
                <p className='text-backgroundColor'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className='flex justify-center lg:justify-start'>
                    <Button title="Order now" address={`login`}/>
                </div>
            </div>
        </div>
    )
}

export default Home;
import React from 'react';
import { data } from './images.js';

const BackgroundImage = () => {
    return (
        <div className="relative flex items-center">
            <div id="slider" className="w-full overflow-y-scroll scroll whitespace-nowrap scroll-smooth">
                <img className="w-1/2 h-screen" src={data.img} alt="/" />
            </div>
        </div>
    );
}

export default BackgroundImage;
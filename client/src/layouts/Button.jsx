import React from 'react';
import { Link } from 'react-router-dom';
import { clientURL } from '../App';

const Button = (props) => {
    return (
        <div>
            <button className='px-6 py-1 border-2 border-backgroundColor text-backgroundColor hover:bg-backgroundColor hover:text-white transition-all rounded-full'>
                <Link to={`${clientURL}/${props.address}`}>{props.title}</Link>
            </button>
        </div>
    );
}

export default Button;
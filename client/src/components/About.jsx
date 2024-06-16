import React from 'react';
import Button from '../layouts/Button';

const About = () => {
    return (
        <div className='min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5'>
                    {/* <img
                        src="https://images.unsplash.com/photo-1543007631-283050bb3e8c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="img"
                        className='flex flex-wrap w-60 rounded-xl'
                    /> */}
                    <div className='space-y-4 lg:pt-14'>
                        <h1 className='font-semibold text-4xl text-center md:text-start'>Why choose Us?</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris convallis dui quis justo sollicitudin, auctor rutrum ligula consectetur.
                            In eu nisl interdum, bibendum dui in, blandit nunc.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris convallis dui quis justo sollicitudin, auctor rutrum ligula consectetur.
                            In eu nisl interdum, bibendum dui in, blandit nunc. Nam vehicula enim a molestie congue.
                            Donec pretium elementum ornare. Vivamus in diam eu arcu eleifend pellentesque sed quis odio.
                            Quisque sed elit sodales, elementum erat id, mollis augue.
                        </p>
                        <div className='flex justify-center lg:justify-start'>
                            <Button title="Discover more" />
                        </div>
                    </div>
                </div>
    );
}

export default About;
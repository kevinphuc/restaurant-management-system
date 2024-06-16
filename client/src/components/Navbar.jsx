import React from 'react';
import { Link } from 'react-router-dom';
import { BiRestaurant } from 'react-icons/bi';
import Button from '../layouts/Button.jsx';
import Home from './Home.jsx';
import About from './About.jsx';

const NavBar = () => {
    return (
        <div className=''>
            <div className="fixed w-full bg-image-7 bg-cover bg-bottom">
                <div>
                    <div className='flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgba(0, 0, 0, 0.2)]'>
                        <div className='flex flex-row items-center cursor-pointer'>
                            <span>
                                <BiRestaurant size={32} />
                            </span>
                            <h1 className='text-xl font-semibold'>Restaurant Management</h1>
                        </div>
                        <nav className='hidden md:flex flex-row items-center text-lg font-medium gap-8'>
                            <Link
                                to="home"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className="hover:text-backgroundColor transition-all cursor-pointer"
                            >
                                Home
                            </Link>
                            <Link
                                to="menu"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className="hover:text-backgroundColor transition-all cursor-pointer"
                            >
                                Menu
                            </Link>

                            <Button title="Login" address={`login`} />
                        </nav>
                    </div>
                </div>
            </div>
            <main>
                <div className=''>
                    <Home />
                    <About />
                </div>
            </main>
        </div>
    );
}

export default NavBar;
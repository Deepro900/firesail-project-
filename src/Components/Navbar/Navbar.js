import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFire } from "react-icons/fa";

//import { Link } from 'react-router-dom';



const Navbar = () => {
    const routes = [
        { id: 1, path: '/', name: 'Fireseil' },
        { id: 2, path: '/forCreator', name: 'For Creator' },
        { id: 3, path: '/forCollector', name: 'For Collector' },
        { id: 3, path: '/EnterApps', name: 'Enter Apps' },



    ]

    return (
        <header className='bg-black'>

            <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between'>

                <ul className='md:flex gap-12 text-lg hidden '>

                    <div className='text-white lg:flex gap-4 items-center hidden'>
                        <a href='/' className='text-xl font-bold text-white'><FaFire /></a>
                    </div>
                    {
                        routes.map(({ path, name }) => <li className='text-white' key={path}>
                            <NavLink to={path}>{name}</NavLink>
                        </li>)
                    }


                </ul>
                <div className="lg:flex gap-4 items-center">
                    <button className='bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white'>Collect Wallate</button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
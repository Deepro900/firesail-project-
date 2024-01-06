import React from 'react';
import { FaFire } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Header = () => {
    return (
        <div>
            <ul className='Nav-manu'>
                <li>
                    <li>

                        <FontAwesomeIcon icon="fa-solid fa-fire" />


                    </li>
                </li>
            </ul>
            <FaFire />

        </div>
    );
};

export default Header;
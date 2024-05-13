import React, { useState, useEffect } from 'react';
import style from "../../styles/button.module.css"
import { IoCalendarSharp } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Button = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768); // Assume 768px is the breakpoint for small screens
        };

        handleResize(); // Call it once to set initial state
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={style['btn-icon']}>
            <div className={style.icon}>
                <Link to="0334563798">
                {isSmallScreen ? <FiPhoneCall className={style.phone}/> : <IoCalendarSharp />}
                <p>Đặt lịch ngay</p>
                </Link>
           </div>
        </div>
    );
};

export default Button;


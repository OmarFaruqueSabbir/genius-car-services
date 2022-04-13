import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    const day = today.getDay();
    const date = today.getDate();
    return (
        <footer className='text-center mt-5'>
            <p><small>copyright @ {date} -{day} - {year}</small></p>
        </footer>
    );
};

export default Footer;
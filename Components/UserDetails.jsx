import React from 'react';
import img from "../images/photo.jpg";
import './UserDetails.css'; // Make sure to import the CSS file

const UserDetails = () => {
    return (
        <div className='user-details'>
            <div className='details'>
                <header>
                    <h3>SRI HARINI MUTHUKRISHNAN</h3>
                    <p>Contact: 6381387438, sriharinimuthukrishnan@gmail.com</p>
                </header>
                <section>
                    <p>
                        <a href="https://github.com/sri2403" target='_blank' rel='noopener noreferrer'>GitHub</a> | 
                        <a href='https://www.linkedin.com/in/sriharini-muthukrishnan-122259290/' target='_blank' rel='noopener noreferrer'>LinkedIn</a> | 
                        <a href='https://portfolio-sri2403.netlify.app/' target='_blank' rel='noopener noreferrer'>My Portfolio</a>
                    </p>
                </section>
            </div>
            <img 
                src={img} 
                alt='Sri Harini Muthukrishnan' 
                className='profile-img' 
            />
        </div>
    );
};

export default UserDetails;

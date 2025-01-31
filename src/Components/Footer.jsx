import React from 'react';
import "../Styles/Footer.css";

const Footer = () => {
    return (
        <>
            <div className='footer-main'>
                <div className="outer-border">
                    <div className='outer'>
                        <div className="items">
                            <p className='years'>6+</p>
                            <p className='paragra'>Years of Experience</p>
                        </div>
                        <div className="items">
                            <p className='years'>15K</p>
                            <p className='paragra'>Business Partner</p>
                        </div>
                        <div className="items">
                            <p className='years'>40K</p>
                            <p className='paragra'>Satisfied Customer</p>
                        </div>
                        <div className="items">
                            <p className='years'>5+</p>
                            <p className='paragra'>Countries Worldwide</p>
                        </div>
                    </div>
                </div>

                <div className='footer-bottom'>
                    <h1 id='bottom-heading'>Dating Hub</h1>
                    <div className='footer-links'>
                        <a href="#" className='footer-link'>Home</a>
                        <a href="#" className='footer-link'>Our Clients</a>
                        <a href="#" className='footer-link'>About Us</a>
                        <a href="#" className='footer-link'>Contact Us</a>
                    </div>
                    <hr />
                    <p className='copyright'>Copyright © 2018</p>
                </div>
            </div>
        </>
    );
}

export default Footer;

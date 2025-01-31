import React from 'react'
import "../Styles/Clients.css"
import Image1 from "../Assests/Image1.png"
import Image2 from "../Assests/Image2.png"
import Image3 from "../Assests/Image3.png"
import Image4 from "../Assests/Image4.png"
import Image5 from "../Assests/Image5.png"
import Image6 from "../Assests/Image6.png"

const Clients = () => {
    return (
        <>
            <div className='clients-top'>
                <div >
                    <h3 className='vip-clients'>Our VIP Clients</h3>
                    <p>Meet Our Lovely Clients For Service And Contact Our Agent</p>
                </div>

                <div>
                    <div className="card-container">
                        <div className="profile-card">
                            <img src={Image1} alt="Profile" />
                            <div className="text-overlay">
                                <h2>Naisha</h2>
                                <div className="vip">VIP Member</div>
                            </div>
                        </div>

                        <div className="profile-card">
                            <img src={Image2} alt="Profile" />
                            <div className="text-overlay">
                                <h2>Vanshika</h2>
                                <div className="vip">VIP Member</div>
                            </div>
                        </div>

                        <div className="profile-card">
                            <img src={Image3} alt="Profile" />
                            <div className="text-overlay">
                                <h2>Natasha</h2>
                                <div className="vip">VIP Member</div>
                            </div>
                        </div>

                        <div className="profile-card">
                            <img src={Image4} alt="Profile" />
                            <div className="text-overlay">
                                <h2>Yamini</h2>
                                <div className="vip">VIP Member</div>
                            </div>
                        </div>

                        <div className="profile-card">
                            <img src={Image5} alt="Profile" />
                            <div className="text-overlay">
                                <h2>Manshi</h2>
                                <div className="vip">VIP Member</div>
                            </div>
                        </div>

                        <div className="profile-card">
                            <img src={Image6} alt="Profile" />
                            <div className="text-overlay">
                                <h2>Jiya</h2>
                                <div className="vip">VIP Member</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Clients
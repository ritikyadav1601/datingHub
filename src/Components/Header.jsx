import React from 'react'
import "../Styles/Header.css"
import Register from './Register'

const Header = () => {
    return (
        <>
            <div className='main'>
                <div className='title'>
                    Dating Hub Friendship Club Giving You <br />
                    A Chance To Earn 15,000 to 25,000 On Regular Basis !
                </div>

                <h1 className='dating'>
                    Dating Hub
                </h1>

                <div className='form-outer'>
                   <Register/>
                </div>
            </div>
        </>
    )
}

export default Header
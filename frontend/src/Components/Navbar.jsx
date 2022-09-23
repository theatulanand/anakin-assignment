import React from 'react'
import { GoLocation } from 'react-icons/go';
import { BsHandbag } from 'react-icons/bs'
export const Navbar = () => {
    return (
        <div id="container">
            <div id="left">
                <div style={{ paddingTop: "12px" }}>
                    <img style={{ width: "150px" }} src="https://i.pinimg.com/originals/b7/6c/4d/b76c4dfdaa033a719bb5abbe883edf8e.png" alt="" />
                </div>
                <div className='location'>
                    <p> Deliver to <GoLocation style={{ color: "red" }} /> Singapore General Hospital</p>
                </div>
            </div>
            <div id="right">
                <div className='location'>
                    <p>Login / Signup</p>
                </div>
                <div>
                    <BsHandbag style={{ fontSize: "30px", marginTop: "10px" }} />
                </div>
            </div>
        </div>
    )
}

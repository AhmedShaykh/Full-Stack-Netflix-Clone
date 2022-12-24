import React, { useState, useEffect } from 'react';
import "./Navbar.css";

const Navbar = () => {

    const [handleShow, setHandleShow] = useState(false);

    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            setHandleShow(true);
        } else {
            setHandleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => window.removeEventListener("scroll", transitionNavbar);
    }, []);

    return (
        <div className={`navbar ${handleShow && "nav-black"}`}>
            <div className="nav-content">
                <img className='nav-logo'
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt="Netflix Logo" />

                <img className='nav-avatar'
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt="Netflix Avatar" />
            </div>
        </div>
    )
}

export default Navbar;
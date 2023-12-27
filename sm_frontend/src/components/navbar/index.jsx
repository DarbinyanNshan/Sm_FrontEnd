import React, { useState } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

import logo from "../../assets/images/logo.png";

import { BiMap } from "react-icons/bi";
import { BiTimeFive } from "react-icons/bi";
import { GoMail } from "react-icons/go"
import { FiPhoneCall } from "react-icons/fi"

export const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false)

    return <>
        <div className="info">
            <div className="contact-data">
                <p className="time"> <span><BiTimeFive /></span>Երկ. - Ուրբ. 09:00-18:00 </p>
                <p className="mail"><span><GoMail /></span> info@smconsulting.am</p>
                <p className="phone-number"><span><FiPhoneCall /></span>+374 (93) 888 834 </p>
            </div>
            <div className="addres">
                <p className="map-text"> <span><BiMap /></span> ք. Երևան, Դավիթ Անհաղթ 11/6</p>
            </div>
        </div>
        <nav className="navbar" >
            <div className="logo">
                <img src={logo} alt="*" />
            </div>
            <nav className={`nav-links ${isOpen && "open"}`}>
                <NavLink to="/" >Գլխավոր</NavLink>
                <NavLink to="/about">Մեր Մասին</NavLink>
                <NavLink to="/services">Ծառայություներ </NavLink>
                <NavLink to="/contact">Կապ </NavLink>
            </nav>
            <div className={`new-toggle ${isOpen && "open"}`}
                onClick={() => setIsOpen(!isOpen)}>
                <div className="bar"></div>
            </div>

        </nav>
    </>

}
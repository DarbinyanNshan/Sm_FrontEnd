import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { BiMap, BiTimeFive } from "react-icons/bi";
import { GoMail } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "../../i18n/LanguageSwitcher";

import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isFixed, setIsFixed] = useState(false);
    const { t } = useTranslation();
    const navRef = useRef(null); 

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

      
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <>
            <div className="info">
                <div className="contact-data">
                    <p className="time"><span><BiTimeFive /></span> {t('navBar.openHours')} </p>
                    <p className="mail"><span><GoMail /></span> info@smconsulting.am</p>
                    <p className="phone-number"><span><FiPhoneCall /></span> +374 (94) 775 002   <span> <FiPhoneCall /></span>+374 (11) 448 282</p>
                </div>
                <div className="address">
                    <p className="map-text"><span><BiMap /></span> {t('navBar.address')}</p>
                </div>
            </div>
            <nav ref={navRef} className={`navbar ${isFixed ? "fixed" : ""}`}>
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className={`nav-links ${isOpen ? "open" : ""}`}>
                    {isOpen && (
                        <div className="close-icon" onClick={() => setIsOpen(false)}>
                            <IoClose />
                        </div>
                    )}
                    <NavLink to="/" onClick={() => setIsOpen(false)}>{t('navBar.home')}</NavLink>
                    <NavLink to="/about" onClick={() => setIsOpen(false)}>{t('navBar.about')}</NavLink>
                    <NavLink to="/services" onClick={() => setIsOpen(false)}>{t('navBar.services')}</NavLink>
                    <NavLink to="/contact" onClick={() => setIsOpen(false)}>{t('navBar.contact')}</NavLink>
                    <LanguageSwitcher setIsOpen={setIsOpen} />
                </div>
                {!isOpen && (
                    <div className="new-toggle" onClick={() => setIsOpen(true)}>
                        <FaBars />
                    </div>
                )}
            </nav>
        </>
    );
};

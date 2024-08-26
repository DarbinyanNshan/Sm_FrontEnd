import React, { useState, useEffect } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { BiMap, BiTimeFive } from "react-icons/bi";
import { GoMail } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "../../i18n/LanguageSwitcher";

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isFixed, setIsFixed] = useState(false);
    const { t } = useTranslation();

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
            <nav className={`navbar ${isFixed ? "fixed" : ""}`}>
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <nav className={`nav-links ${isOpen && "open"}`}>
                    <NavLink to="/" onClick={() => setIsOpen(false)}>{t('navBar.home')}</NavLink>
                    <NavLink to="/about" onClick={() => setIsOpen(false)}>{t('aboutTitle')}</NavLink>
                    <NavLink to="/services" onClick={() => setIsOpen(false)}>{t('navBar.services')}</NavLink>
                    <NavLink to="/contact" onClick={() => setIsOpen(false)}>{t('navBar.contact')}</NavLink>
                    <LanguageSwitcher />
                </nav>
                <div className={`new-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                    <div className="bar"></div>
                </div>
            </nav>
        </>
    );
};

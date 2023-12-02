import React from "react";
import "./style.css";

import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai"
import { useNavigate } from "react-router-dom";

import logo from "../../assets/images/logo.png";


export const Footer = () => {
    const navigate = useNavigate()


    const onHome = () => {
        navigate('/');
    }
    const onAbout = () => {
        navigate('/about');
    }

    const onService = () => {
        navigate('/services');
    }
    const onContact = () => {
        navigate('/contact');
    }
    const onNews = () => {
        navigate('/news');
    }

    return <>
        <div className="footer">
            <div className="pages">
                <div className="pages_link">
                    <div>
                        <button onClick={onHome}>Գլխաոր</button>
                    </div>
                    <div>
                        <button onClick={onAbout}>Մեր Մասին</button>
                    </div>
                    <div>
                        <button onClick={onService}>Ծառայություներ</button>
                    </div>
                    <div>
                        <button onClick={onContact}>Կապ</button>
                    </div>
                    <div>
                        <button onClick={onNews}>Նորություներ</button>
                    </div>
                </div>

            </div>
            <div className="contact-us">
                <h2>Կապ Մեզ Հետ</h2>
                <div className="contact-content">
                    <p>Հասցե:<span>  ք. Երևան, Դավիթ Անհաղթ 11/6</span></p>
                    <p>Հեռ․:<span>  +374 93 888 834</span></p>
                    <p>Էլ․Հասցե:<span>  info@smconsulting.am</span></p></div>

            </div>
            <div className="website">
                <h2>Բաժանորդագրվել</h2>
                <div className="website_icon">
                    <div className="fa"><a href="https://react-slick.neostack.com/docs/example/responsive"><BiLogoFacebook /></a></div>
                    <div className="in"><a href=""><FaInstagram /></a></div>
                    <div className="li"><a href=""><BiLogoLinkedin /></a></div>
                    <div className="yt"><a href=""><AiFillYoutube /></a></div>
                    <div className="twit"><a href=""><AiOutlineTwitter /></a></div>
                </div>
                <div className="footer_logo">
                    <img src={logo} alt="*" />
                </div>
            </div>
        </div>
        <div className="footer_text">
            <p> Copyright &copy; 2023 by Darbinyan  |  ALL Rights Reserved.</p>
        </div>
    </>

}
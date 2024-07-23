import React from "react";
import "./style.css";

import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai"
import { useNavigate } from "react-router-dom";

import logo from "../../assets/images/logo.png";


// ... (your import statements)

export const Footer = () => {
    const navigate = useNavigate();
  
    const onHome = () => {
      navigate('/');
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    const onAbout = () => {
      navigate('/about');
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    const onService = () => {
      navigate('/services');
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    const onContact = () => {
      navigate('/contact');
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    return (
      <>
        <div className="footer">
          <div className="pages">
            <div className="pages_link">
              <div>
                <button onClick={onHome}>Գլխավոր</button>
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
            </div>
          </div>
          <div className="contact-us">
            <h2>Կապ Մեզ Հետ</h2>
            <div className="contact-content">
              <p>
                Հասցե:<span> ք. Երևան, Դավիթ Անհաղթ 11/6</span>
              </p>
              <p>
                Հեռ․:<span> +374 (94) 775 002</span>
              </p>
              <p>
                Էլ․Հասցե:<span> info@smconsulting.am</span>
              </p>
            </div>
          </div>
          <div className="website">
            <h2>Բաժանորդագրվել</h2>
            <div className="website_icon">
              <div className="fa">
                <a
                  href="https://www.facebook.com/smconsultingarmenia"
                  aria-label="Facebook"
                >
                  <BiLogoFacebook />
                </a>
              </div>
              <div className="in">
                <a href="#" aria-label="Instagram">
                  <FaInstagram />
                </a>
              </div>
              <div className="li">
                <a href="#" aria-label="LinkedIn">
                  <BiLogoLinkedin />
                </a>
              </div>
              {/* <div className="yt">
                <a href="#" aria-label="YouTube">
                  <AiFillYoutube />
                </a>
              </div> */}
              <div className="twit">
                <a href="#" aria-label="Twitter">
                  <AiOutlineTwitter />
                </a>
              </div>
            </div>
            {/* <div className="footer_logo">
              <img src={logo} alt="*" />
            </div> */}
          </div>
        </div>
        <div className="footer_text">
          {/* <p> &copy; 2023 by Darbinyan </p> */}
        </div>
      </>
    );
  };
  
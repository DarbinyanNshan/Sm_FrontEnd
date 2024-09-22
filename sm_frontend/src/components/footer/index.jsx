import React from "react";
import "./style.css";
import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import { RiHomeOfficeFill } from "react-icons/ri";


export const Footer = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const onNavigate = (path) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="footer">
        <div className="pages">
          <div className="pages_link">
            <div>
              <button onClick={() => onNavigate("/")}>
                {t("navBar.home")}
              </button>
            </div>
            <div>
              <button onClick={() => onNavigate("/about")}>
                {t("aboutTitle")}
              </button>
            </div>
            <div>
              <button onClick={() => onNavigate("/services")}>
                {t("navBar.services")}
              </button>
            </div>
            <div>
              <button onClick={() => onNavigate("/contact")}>
                {t("navBar.contact")}
              </button>
            </div>
          </div>
        </div>
        <div className="contact-us">
          <h2>{t("contactUs.title")}</h2>
          <div className="contact-content">
            <p>
              {t("contactUs.addressTitle")}:
              <span>{t("navBar.address")}</span>
            </p>
            <p >
              {t("contactUs.phoneTitle")}:
              <span>+374 (94) 775 002</span>
            </p>
            <p >
            {t("contactUs.phoneOffice")}:
              <span>    +374 (11) 448 282</span>
            </p>
            <p>
              {t("contactUs.emailTitle")}:
              <span>info@smconsulting.am</span>
            </p>
          </div>
        </div>
        <div className="website">
          <h2>{t("subscribe.title")}</h2>
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
              <a href="#" onClick={(e) => e.preventDefault()} aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
            <div className="li">
              <a href="#" onClick={(e) => e.preventDefault()} aria-label="LinkedIn">
                <BiLogoLinkedin />
              </a>
            </div>
            <div className="twit">
              <a href="#" onClick={(e) => e.preventDefault()} aria-label="Twitter">
                <AiOutlineTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_text">
        {/* <p> &copy; 2023 by Darbinyan </p> */}
      </div>
    </>
  );
};

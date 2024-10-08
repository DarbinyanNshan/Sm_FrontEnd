import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import "./style.css";
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { BiSolidTimeFive } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactUs = () => {
  const { t } = useTranslation();
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_avjh2ws",
        "template_3sxoptj",
        form.current,
        "G_GFIiShl_BuU3IBw"
      )
      .then(
        () => {
          toast.success(t("success_message"), {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        },
        () => {
          toast.error(t("error_message"), {
            position: "bottom-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div className="contact_img"></div>
      <section className="contact">
        <form className="contact_form" ref={form} onSubmit={sendEmail}>
          <h2 className="contact_title">{t("send_message")}</h2>
          <div className="input-box">
            <div className="input-field">
              <input
                type="text"
                name="user_name"
                placeholder={t("your_name")}
                required
              />
              <span className="focus"></span>
            </div>
            <div className="input-field">
              <input
                type="number"
                name="user_number"
                placeholder={t("phone_number")}
                required
              />
              <span className="focus"></span>
            </div>
            <div className="input-field">
              <input
                type="email"
                placeholder={t("email")}
                name="user_email"
                required
              />
              <span className="focus"></span>
            </div>
          </div>
          <div className="textarea-field">
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder={t("your_message")}
              required
            />
            <span className="focus"></span>
          </div>

          <div>
            <button type="submit" className="contact_btn">
              {t("send")}
            </button>
          </div>
          <ToastContainer
            position="bottom-center"
            autoClose={4000}
            limit={1}
            hideProgressBar={false}
            newestOnTop
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </form>

        <div className="contact_info">
          <h2>{t("contact_details")}</h2>
          <div className="contact_icon home">
            <FaHome /> <span>{t("navBar.address")}</span>
          </div>
          <div className="contact_icon phone">
            <FaPhoneAlt />
            <span>+374 (94) 775 002</span>
          </div>
          <div className="contact_icon phone">
            <FaPhoneAlt />
            <span>+374 (11) 448 282</span>
          </div>
          <div className="contact_icon maill">
            <HiMail />
            <span>info@smconsulting.am</span>
          </div>
          <div className="contact_icon time">
            <BiSolidTimeFive />
            <span>{t("navBar.openHours")}</span>
          </div>
        </div>
      </section>
      <div className="contact_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.2301660845555!2d44.5269981758766!3d40.203942771474566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd2d69a4f031%3A0x4b097a3c8a52eaa7!2s11%20Davit%20Anhaght%20Street%2C%20Yerevan%200014!5e0!3m2!1sru!2sam"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

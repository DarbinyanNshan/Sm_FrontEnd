import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./style.css"

import contact_img from "../../assets/images/contact_img.jpg"

import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { BiSolidTimeFive } from "react-icons/bi";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactUs = () => {


    const form = useRef("");

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_avjh2ws',
            'template_3sxoptj',
            form.current,
            'G_GFIiShl_BuU3IBw')
            .then(() => {
                toast.success('Your messeg has been sent!', {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }, () => {
                toast.error('You could not edit the messeg!', {
                    position: "bottom-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            });
        e.target.reset();

    };

    return <>
        <div className="contact_img">
            <img src={contact_img} alt="" />
            <h1 className="contact_text">Contact Us</h1>
        </div>
        <section className="contact" >
            <form className="contact_form"
                ref={form}
                onSubmit={sendEmail}>
                <h2 className="contact_title" >Send Us a Message</h2>
                <div className="input-box">
                    <div className="input-field">
                        <input type="text"
                            name="user_name"
                            placeholder="Your Name"
                            required
                        />
                        <span className="focus"></span>
                    </div>
                    <div className="input-field">
                        <input type="number"
                            name="user_number"
                            placeholder="Phone Number"
                            required
                        />
                        <span className="focus"></span>
                    </div>
                    <div className="input-field" >
                        <input type="email"
                            placeholder="Email Addres"
                            name="user_email"
                            required />
                        <span className="focus"></span>
                    </div>
                </div>
                <div className="textarea-field"
                >
                    <textarea
                        name="message"
                        cols="30"
                        rows="10"
                        placeholder="Your Message"
                        required
                    />
                    <span className="focus"></span>
                </div>

                <div>
                    <button
                        type="submit"
                        className="contact_btn">
                        Send Mail
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
                <h2 >Contact Info</h2>
                <div className="contact_icon home"><FaHome /> <span>ք. Երևան, Դավիթ Անհաղթ 11/6</span></div>
                <div className="contact_icon phone"><FaPhoneAlt /><span>+374 (93) 888 834</span></div>
                <div className="contact_icon maill"><HiMail /><span>info@smconsulting.am</span></div>
                <div className="contact_icon time"><BiSolidTimeFive /><span>Երկ. - Ուրբ. 09:00-18:00 </span></div>
            </div>
        </section>
        <div className="contact_map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.2301660845555!2d44.5269981758766!3d40.203942771474566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd2d69a4f031%3A0x4b097a3c8a52eaa7!2s11%20Davit%20Anhaght%20Street%2C%20Yerevan%200014!5e0!3m2!1sru!2sam!4v1697647389708!5m2!1sru!2sam"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade" />
        </div>

    </>
}
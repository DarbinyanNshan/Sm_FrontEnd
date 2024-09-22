import React, { useEffect } from "react";
import "./style.css";

import { FaCheckSquare } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

export const About = () => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const numbers = document.querySelectorAll('.number');
        const counters = Array(numbers.length).fill(0);
        const intervals = [];

        numbers.forEach((number, index) => {
            intervals[index] = setInterval(() => {
                if (counters[index] === parseInt(number.dataset.num)) {
                    clearInterval(intervals[index]);
                } else {
                    counters[index] += 1;
                    number.innerHTML = counters[index];
                }
            }, 50);
        });

        return () => {
            intervals.forEach(clearInterval);
        };
    }, []);

    const getImagePath = (imageName) => {
        try {
            const lang = i18n.language;
            return require(`../../assets/images/${lang}/${imageName}`);
        } catch (error) {
            console.error("Image not found, loading fallback image.", error);
            return require(`../../assets/images/default/fallback.jpg`); 
        }
    };

    return (
        <>
            <div className="about-img"></div>
            <div className="about-section">
                <div className="about">
                    <div className="about-content">
                        <h2 className="about-title">
                            {t('aboutTitle')}
                        </h2>
                        <p className="about-content-text">
                            {t('about.mission')}
                        </p>
                        <div className="numbers">
                            <div className="about-number">
                                <div className="number" data-num="6"></div>
                                <div className="language-text">{t('about.years_of_experience')}</div>
                            </div>
                            <div className="about-number">
                                <div className="number-content">
                                    <div className="number" data-num="200"></div>
                                </div>
                                <div className="language-text">{t('about.happy_customers')}</div>
                            </div>
                            <div className="about-number">
                                <div className="number-content">
                                    <div className="number" data-num="100"></div>
                                    <p>%</p>
                                </div>
                                <div className="language-text">{t('about.satisfaction')}</div>
                            </div>
                        </div>
                    </div>
                    <div className="about-us">
                        <img src={getImagePath('about_img1.jpg')} alt="" />
                    </div>
                </div>
                <div className="about">
                    <div className="about-us">
                        <img src={getImagePath('about_img2.jpg')} alt="" />
                    </div>
                    <div className="about-content">
                        <h2 className="about-title">
                            {t('about.why_choose_us')}
                        </h2>
                        <p className="about-content-text">
                            <FaCheckSquare className="about_icon" /> {t('about.service_range')}<br />
                            <FaCheckSquare className="about_icon" /> {t('about.experienced_professionals')}<br />
                            <FaCheckSquare className="about_icon" /> {t('about.client_care')}<br />
                            <FaCheckSquare className="about_icon" /> {t('about.attention_to_details')}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
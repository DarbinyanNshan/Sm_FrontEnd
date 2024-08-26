import React from "react";
import "./style.css";
import home_img from "../../assets/images/home_img.jpg";
import { useNavigate } from "react-router-dom";
import { Main } from "../../components/main";
import { useTranslation } from 'react-i18next';

export const Home = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const onSubmit = () => {
        navigate('/about');
    };

    return (
        <>
            <div className="home">
                <img src={home_img} alt="" />
                <div className="home-content">
                    <h3>{t('home.header')}</h3>
                    <div className="content">
                        <div className="text-animate">
                            <h1>{t('home.title')}<span>{t('home.titleSpan')}</span></h1>
                        </div>
                        <p>{t('home.description')}</p>
                    </div>
                    <button onClick={onSubmit}>{t('home.buttonText')}</button>
                </div>
            </div>
            <Main />
        </>
    );
};

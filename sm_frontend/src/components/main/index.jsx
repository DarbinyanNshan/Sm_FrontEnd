import React from "react";
import "./style.css";
import { useTranslation } from 'react-i18next';
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BiCodeAlt } from "react-icons/bi";
import { BsRocketTakeoff } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import Img_1 from "../../assets/images/main_img/service_1.jpg";
import Img_2 from "../../assets/images/main_img/service_2.jpg";
import Img_3 from "../../assets/images/main_img/service_3.jpg";

export const Main = () => {
    const { t, i18n } = useTranslation(); 
    const navigate = useNavigate();

    const main = [
        {
            img: Img_1,
            title: t('main.businessControl'),
            description: t('main.businessControlDescription'),
        },
        {
            img: Img_2,
            title: t('main.taxInspection'),
            description: t('main.taxInspectionDescription'),
        },
        {
            img: Img_3,
            title: t('main.accountingRecovery'),
            description: t('main.accountingRecoveryDescription'),
        }
    ];

    const ServiceItem = ({ img, title, description }) => (
        <div className="main_1">
            <img src={img} alt="" className="main1_img" />
            <h2 className="main1_title">{title}</h2>
            <p className="main1_description">{description}</p>
        </div>
    );

    const onClick = () => {
        navigate('/services');
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const getImagePath = (imageName) => {
        const lang = i18n.language;
        return require(`../../assets/images/${lang}/${imageName}`);
    };

    return (
        <div className='main_content'>
            <div className="main_title">
                <div className="accounting_server">
                    <p>{t('main.consultingTitle')}</p>
                </div>
                <div className="accounting_text">
                    {t('main.consultingDescription')}
                </div>
            </div>
            <div className="main">
                {main.map((item, index) => (
                    <ServiceItem key={index} {...item} />
                ))}
            </div>
            <div className="main_p">
                <div className="main_title">
                    <div className="accounting_server main_server">
                        <p>{t('main.professionalConsulting')}</p>
                    </div>
                </div>
                <div className="main">
                    <div className="main2_section">
                        <div className="main2">
                            <div className="main2_icons"><HiOutlineDesktopComputer /></div>
                            <div className="main2_title">{t('main.accountingServices')}</div>
                            <div className="main2_text">
                                {t('main.accountingServicesDescription')}
                            </div>
                        </div>
                    </div>

                    <div className="main2_section">
                        <div className="main2">
                            <div className="main2_icons"><BiCodeAlt /></div>
                            <div className="main2_title">{t('main.taxConsulting')}</div>
                            <div className="main2_text">
                                {t('main.taxConsultingDescription')}
                            </div>
                        </div>
                    </div>

                    <div className="main2_section">
                        <div className="main2">
                            <div className="main2_icons"><BsRocketTakeoff /></div>
                            <div className="main2_title">{t('main.staffManagement')}</div>
                            <div className="main2_text">
                                {t('main.staffManagementDescription')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main_about">
                <div className="main_about_img">
                <img  src={getImagePath('main_about.jpg')} alt="" />
                </div>
                <div className="main_about_contant">
                    <h2 className="main_about_title">
                        {t('main.aboutTitle')}
                    </h2>
                    <p className="main_about_text">
                        {t('main.serviceList.taxPlanning')}<br />
                        {t('main.serviceList.policyDevelopment')}<br />
                        {t('main.serviceList.riskAnalysis')}<br />
                        {t('main.serviceList.controlMeasures')}<br />
                        {t('main.serviceList.automation')}<br />
                        {t('main.serviceList.reporting')}<br />
                    </p>
                    <div className="main_about_btn">
                        <button onClick={onClick}>{t('main.learnMore')}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

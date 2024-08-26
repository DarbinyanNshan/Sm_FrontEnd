import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./style.css";
import { AiFillCaretRight } from "react-icons/ai";
import { FaCaretDown } from "react-icons/fa";

export const Service = () => {
    const { t, i18n } = useTranslation();
    const [activeSection, setActiveSection] = useState(null);

    const toggleSection = (index) => {
        setActiveSection(activeSection === index ? null : index);
    };

    const service_1 = [
        { id: 1, title: t('service.service1.title1'), description: t('service.service1.description1') },
        { id: 2, title: t('service.service1.title2'), description: t('service.service1.description2') },
        { id: 3, title: t('service.service1.title3'), description: t('service.service1.description3') },
        { id: 4, title: t('service.service1.title4'), description: t('service.service1.description4') },
        { id: 5, title: t('service.service1.title5'), description: t('service.service1.description5') }
    ];
    const getImagePath = (imageName) => {
        const lang = i18n.language;
        return require(`../../assets/images/${lang}/${imageName}`);
    };

    return (
        <div className="service">
            <div className="service_img" />
            <div className="service_2">
                <div className="service_2_content">
                    <h1 onClick={() => toggleSection(1)}>
                        {t('service.title1')}
                        {activeSection === 1 ? <FaCaretDown /> : <AiFillCaretRight />}
                    </h1>
                    <div className={`section-content ${activeSection === 1 ? "open" : ""}`}>
                        <p>{t('service.description1')}</p>
                    </div>

                    <h1 onClick={() => toggleSection(2)}>
                        {t('service.title2')}
                        {activeSection === 2 ? <FaCaretDown /> : <AiFillCaretRight />}
                    </h1>
                    <div className={`section-content ${activeSection === 2 ? "open" : ""}`}>
                        <p>{t('service.description2')}</p>
                    </div>

                    <h1 onClick={() => toggleSection(3)}>
                        {t('service.title3')}
                        {activeSection === 3 ? <FaCaretDown /> : <AiFillCaretRight />}
                    </h1>
                    <div className={`section-content ${activeSection === 3 ? "open" : ""}`}>
                        <p>{t('service.description3')}</p>
                    </div>
                </div>
                <img  src={getImagePath('service_img1.jpg')} alt="" />
            </div>

            <h3 onClick={() => toggleSection(4)}>
                {t('service.title4')}
                {activeSection === 4 ? <FaCaretDown /> : <AiFillCaretRight />}
            </h3>
            <div className={`section-content ${activeSection === 4 ? "open" : ""}`}>
                <p>{t('service.description4')}</p>
            </div>

            <h3 onClick={() => toggleSection(5)}>
                {t('service.title5')}
                {activeSection === 5 ? <FaCaretDown /> : <AiFillCaretRight />}
            </h3>
            <div className={`section-content ${activeSection === 5 ? "open" : ""}`}>
                <p>{t('service.description5')}</p>
            </div>
            <h1>{t('service.service1.title0')}</h1>
             <p>{t('service.service1.description0')}</p>
            {service_1.map(service => (
                <div key={service.id} className="service_2_contant">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                </div>
            ))}
             <h1>{t('service.service1.title7')}</h1>
             <p>{t('service.service1.description7')}</p>
        </div>
    );
};

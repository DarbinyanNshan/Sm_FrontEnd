import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./style.css";

export const Error404 = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/");
    };

    return (
        <div className="error-page">
            <div className="error-content">
                <h1 className="error-code">{t("errorCode")}</h1>
                <h4 className="error-message">{t("errorMessage")}</h4>
                <p className="error-text">{t("errorText")}</p>
                <button className="error-button" onClick={goToHome}>{t("errorButton")}</button>
            </div>
        </div>
    );
};

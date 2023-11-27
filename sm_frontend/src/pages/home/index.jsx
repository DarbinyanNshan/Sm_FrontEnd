import React from "react";
import "./style.css"

import home_img from "../../assets/images/home_img.jpg"
import { useNavigate } from "react-router-dom";
import { Main } from "../../components/main";

export const Home = () => {
    const navigate = useNavigate()

    const onSubmit = () => {
        navigate('/about');
    }

   
    return <>
        <div className="home">
            <img src={home_img} alt="" />
            <div className="home-conten">
                <h3> CONSULTING FIRM</h3>
                <div className="content">
                    <div className="text-animate">
                        <h1>Welcome to the<span>  SM Consulting Office  </span></h1>
                    </div>
                    <p>SM Consulting office will help you to make your business faster
                        and more accurate in all accounting operations.</p>
                </div>
                <button onClick={onSubmit}>READ  ABOUT  US</button>
            </div>
        </div>
        <Main/>
    </>

}

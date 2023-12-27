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
            <div className="home-content">
                <h3> ԽՈՐՀՐԴԱՏՎԱԿԱՆ ԸՆԿԵՐՈՒԹՅՈՒՆ</h3>
                <div className="content">
                    <div className="text-animate">
                        <h1>Բարի Գալուստ<span>  SM Consulting ընկերության պաշտոնական էջ</span></h1>
                    </div>
                    <p>SM Consulting ընկերությունը կօգնի Ձեր դարձնել Ձեր բիզնեսն ավելի
                         արագ և ճշգրիտ բոլոր հաշվապահական գործառնություններում</p>
                </div>
                <button onClick={onSubmit}>Մեր Մասին</button>
            </div>
        </div>
        <Main/>
    </>

}

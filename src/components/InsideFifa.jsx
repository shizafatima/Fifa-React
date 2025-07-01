import React from "react";
import './InsideFifa.css';

function InsideFifa(){
    return(
        <div className="insideFifa-cards">
            
            <div className="insideFifa-card">
                <img className='insideFifa-img' src="src\assets\FIFA-Forward-Award.webp" alt="" />
                <p className="insideFifa-title">England, Kyrgyz Republic and Thailand take top FIFA Forward Awards 2025</p>

            </div>
            <div className="insideFifa-card">
                <img className='insideFifa-img' src="src\assets\FIFAPresident-meets-with-Football-Association-of-Wales-President-FIFA-Club-World-Cup-2025.webp" alt="" />
                <p className="insideFifa-title">FIFA President Gianni Infantino lauds Welsh football's "vibrant" growth, including...</p>
            </div>

            <div className="insideFifa-card">
                <img className='insideFifa-img' src="src\assets\Guinean-Footbal-Federation-Head.webp" alt="" />
                <p className="insideFifa-title">Future in focus as Gianni Infantino meets Guinean Football Federation head</p>
            </div>
        </div>
    )
}

export default InsideFifa
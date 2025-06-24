import React from "react";
import './Highlight.css';

function HighlightCard(){
    return(
        <div className="highlight-cards">
            <div className="highlight-card">
                <img src="src\assets\highlight-1.webp" alt="Paris Saint-Germain" />
                <p>Paris Saint-Germain v Botafogo | Group B | FIFA Club World Cup USA 2025 | Highlights</p>

            </div>
            <div className="highlight-card">
                <img src="src\assets\highlight2.webp" alt="" />
                <p>Seattle Sounders FC v Atletico de Madrid | Group B | FIFA Club World Cup USA 2025 | Highlights</p>
            </div>

            <div className="highlight-card">
                <img src="src/assets/highlight3.webp" alt="" />
                <p>Inter Miami CF v FC Porto | Group A | FIFA Club World USA 2025 | Highlights</p>
            </div>
        </div>
    )
}

export default HighlightCard
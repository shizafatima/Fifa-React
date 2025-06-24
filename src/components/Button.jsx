import React from "react";
import './Button.css'

function Button (){
    return(
        <div className="grid-container-btn">
            <div className="btn">
                <button>Explore Full Men's Ranking</button>
            </div>
            <div className="btn">
                <button>Explore Full Women's Ranking</button>
            </div>
        </div>
    )
}
export default Button
import React from "react";


function Proj_card(Props) {
    return (
        <>
                <div className="card">
                    <div className="cardImage">
                        <a href={Props.pLink} target="_blank" ><img src={Props.pImage} alt="Project_Image" /></a>
                    </div>
                    <div className="cardHeading">
                        <a href={Props.pLink} target="_blank" ><h2>{Props.pTitle}</h2></a>
                    </div>
                </div>
        </>
    );
};


export default Proj_card;
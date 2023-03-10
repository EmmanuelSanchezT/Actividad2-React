import React from "react";
import '../stylesheet/Review.css'

function Review (props){
    return(
        <div className="box-container">
            <p>{props.texto1}</p>
            <div className="box-user">
                <img className="img-rounded" src={require(`../images/${props.imagen}.jpg`)}  alt="" />
                <div>
                    <h3>{props.nombre1}</h3>
                    <p>{props.cargo}</p>
                </div>
            </div>
        </div>
    );
}

export default Review;
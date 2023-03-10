import React from "react";
import '../stylesheet/Card.css'


function Card (props){
    return(
<div className="box-container1">
    <div className="Card">
    <div className="body">
    <img className="img" src={require(`../images/${props.imagen1}.jpg`)}  alt="" />
      <h3 className="titulo">{props.titulo}</h3>
      <p className="subtitulo">{props.texto}</p>
    <div className="textos">
      <div className="uno">
      <img className="img2" src={require(`../images/${props.imagen2}.svg`)}  alt="" />
        <p className="unop">{props.ETH}</p>
      </div>
      <div className="dos">
      <img className="image" src={require(`../images/${props.imagen3}.svg`)}  alt="" />
        <p className="dosp">{props.days}</p>
      </div>
    </div>
    <div className="linea" ></div>
    <div className="avatar">
    <img className="imgavatar" src={require(`../images/${props.imagen4}.jpg`)}  alt="" />
      <p className="subtitulo">{props.descripcion}</p>
      <h3 className="Nombre"></h3>{props.nombre}
    </div>
  </div>
  </div>
  </div>
    );
}

       /*  <div className="box-container">
            <img className="Card-body" src={require(`../images/${props.imagen}.jpg`)}  alt="" />
            <h3></h3>
            <div className="box-user">cdc
                
                <div>
                    <h3>{props.nombre}</h3>
                    <p>{props.cargo}</p>
                </div>
            </div>
        </div>
    );
} */

export default Card;
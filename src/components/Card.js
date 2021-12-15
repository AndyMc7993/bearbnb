import React  from 'react';
import { GiFlatPawPrint } from "react-icons/gi"
import { GiHoneypot } from "react-icons/gi"

function Card(props){
    return(
        <div className="card" key={props.item.id}>
            <div className="img-container"></div>
                <img className="card-image" src={props.item.coverImg} alt="Property img" />
                {props.item.grizzlyHost && <div className="card-host">GRIZZLY HOST</div>}
            <div className="card-upper">
                <p className="card-rooms"> {props.item.rooms}</p>
                <p className="card-rating"><GiFlatPawPrint className="icons"/> {props.item.rating}</p>
            </div>
            <div className="card-lower">
                <p className="card-title">{props.item.title}</p>
                <p className="card-price">Price: {props.item.price}<GiHoneypot className="icons"/>pn</p>
            </div>

        </div>
    )
}

export default Card
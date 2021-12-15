import React  from 'react';
import logo from '/Users/Bainz/OneDrive/Documents/Coding/Portfolio/Bearbnb/bearbnb/src/images/logo.png'
import '../App.css';
import { AiOutlineSearch } from "react-icons/ai"

export default function Nav(){
    return(
        <div className="nav-bar">
            <img src={logo} alt="bearbnb logo" />

            <div className="searchbar">
                <input className="suggested-location" placeholder="Anchorage, Alaska"/>
                <input className="add-guests" type="number" placeholder="Add guests"/>
                <button className="icon"> <AiOutlineSearch /> </button>

            </div>
        </div>
    )
}


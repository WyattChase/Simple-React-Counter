import React from "react";
import {SecondsCounter} from "./Counter.jsx"
import Timer from "./Timer.jsx";

export const Home = () => {
    return ( 
        <><div className="container text center"><SecondsCounter /></div>
        <div><Timer /></div></>
    )
}
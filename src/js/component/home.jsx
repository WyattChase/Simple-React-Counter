import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import Time from "./timer";
//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<div className="bigCounter">
            <div className="clock"><FontAwesomeIcon icon={faClock}></FontAwesomeIcon></div>
            <div className="four">0</div>
            <div className="three">0</div>
            <div className="two">0</div>
            <div className="one">0</div>
            <hr>
            <Time /></hr>
        </div>
		</div>
	);
};

export default Home;

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { faClock } from "@fortawesome/free-regular-svg-icons";

const SimpleCounter = (props) => {
    return (
        <div className="bigCounter">
            <div className="clock"><FontAwesomeIcon icon={faClock}></FontAwesomeIcon></div>
            <div className="four">0</div>
            <div className="three">0</div>
            <div className="two">0</div>
            <div className="one">0</div>
        </div>
    );
};

export default SimpleCounter;
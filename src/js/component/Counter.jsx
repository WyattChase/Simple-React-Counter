import React from "react";
import PropTypes from "prop-types";

export const SecondsCounter = (props) => {
  let initialValue = "000000";
  let seconds = props.seconds.toString();
  let icon = <i class="far fa-clock"></i>;
  let results = (
    initialValue.split("").slice(seconds.length).join("") + seconds
  ).split("");

  results.unshift(icon);
  return (
    <div className="counter">
      {results.map((e, i) => {
        return (
          <div className="digits" key={i}>
            {e}
          </div>
        );
      })}
    </div>
  );
};

SecondsCounter.PropTypes = {
  seconds: PropTypes.string,
};

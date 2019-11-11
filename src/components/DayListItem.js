import React from "react";

import "components/DayListItem.scss";

const classnames = require('classnames');

export default function DayListItem(props) {
  const dayClass = classnames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots < 1
  });

  const formatSpots = number => {
    if (number < 1) {
      return "no spots remaining";
    } else if (number === 1) {
      return "1 spot remaining";
    } else {
      return number + " spots remaining";
    }
  }

  return (
    <li onClick={props.setDay} className={dayClass}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}

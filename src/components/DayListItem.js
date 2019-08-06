import React from "react";

import "components/DayListItem.scss";

const classNames = require('classnames');

export default function DayListItem(props) {

  const liClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  });

  return (
    <li className={liClass} onClick={props.setDay} >
      <h2>{props.name}</h2>
      <h3>{(props.spots ? (props.spots === 1 ? '1 spot ' : props.spots + ' spots ') : 'no spots ') + 'remaining' }</h3>
    </li>
  );
}

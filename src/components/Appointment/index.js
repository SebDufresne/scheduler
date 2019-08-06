import React from "react";

import "./styles.scss";


import Header from "./Header";

export default function Appointment(props) {

  const header = (
    <Header
      time={props.time}
    />
  )

  return <article className="appointment">{header}</article>;
}

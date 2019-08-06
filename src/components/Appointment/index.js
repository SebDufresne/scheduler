import React from "react";

import "./styles.scss";

import Confirm from "./Confirm";
import Empty from "./Empty";
import Header from "./Header";
import Show from "./Show";

export default function Appointment(props) {

  if(props.mode === 'EMPTY') {
    const empty = (
      <Empty
        onAdd={(e) => props.onAdd}
      />
    )
    return empty;

  } else if (props.mode === 'SHOW') {
    const show = (
      <Show
        student={props.student}
        interviewer={props.interviewer}
        onEdit={(e) => props.onEdit }
        onDelete={(e) => props.onDelete}
      />
    )
    return show;
  } else if (props.mode === 'CONFIRM') {
    const confirm = (
      <Confirm
      onCancel={(e) => props.onCancel }
      onConfirm={(e) => props.onConfirm }
      />
    )
    return confirm;
  } else {
    const header = (
      <Header
        time={props.time}
      />
    )
    return <article className="appointment">{header}</article>;
  }
  
}

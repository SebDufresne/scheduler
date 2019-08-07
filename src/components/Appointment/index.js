import React from "react";

import "./styles.scss";
import Show from "./Show";
import Header from "./Header";
import Empty from "./Empty";

export default function Appointment(props) {
    return (
        <article className="appointment">
            <Header
                time={props.time}
            />
            {props.interview ? 
                <Show
                mode="SHOW"
                student={props.student}
                interviewer={props.interview.interviewer}
                onEdit={props.onEdit}
                onDelete={props.onDelete}
            />
            : <Empty
                mode="EMPTY"
                onAdd={props.onAdd}
            /> 
            }
        </article>
    );
  
}

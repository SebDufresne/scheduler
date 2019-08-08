import React from "react";

import "./styles.scss";
import Form from "./Form";
import Show from "./Show";
import Header from "./Header";
import Confirm from "./Confirm";
import Empty from "./Empty";
import Status from "./Status";

import useVisualMode from "hooks/useVisualMode";

export default function Appointment(props) {
    const CREATE = "CREATE";
    const EMPTY = "EMPTY";
    const SHOW = "SHOW";
    const CONFIRM = "CONFIRM";
    const EDIT = "EDIT";
    const SAVE = "SAVE";
    const DELETE = "DELETE";

    const {mode, transition, back} = useVisualMode(props.interview ? SHOW : EMPTY);

    function save(name, interviewer) {
        const interview = {
            student: name,
            interviewer
          };
        return interview;
    }

    return (
        <article className="appointment">
            <Header
                time={props.time}
            />
            {mode === CONFIRM && (
                <Confirm
                    onCancel={() => transition(SHOW)}
                    onConfirm={() => {
                        transition(DELETE)
                        props.deleteInterview(props.id).then(() => transition(EMPTY));
                    }}
                    message="Delete the Appointment?"
                />
            )}
            {mode === CREATE && (
                <Form
                    interviewers={props.interviewers}
                    onSave={(name, interviewer) => {
                        transition(SAVE)
                        props.bookInterview(props.id,save(name,interviewer)).then(() => transition(SHOW));
                    }}
                    onCancel={() => back()}
                />
            )}
            {mode === DELETE && (
                <Status 
                message="Deleting"
                />
            )}
            {mode === EDIT && (
                <Form
                    name={props.interview.student}
                    interviewer={props.interview.interviewer.id}
                    interviewers={props.interviewers}
                    onSave={(name, interviewer) => {
                        transition(SAVE)
                        props.bookInterview(props.id,save(name,interviewer)).then(() => transition(SHOW));
                }   }
                    onCancel={() => transition(SHOW)}
                />
            )}
            {mode === EMPTY && (
                <Empty         
                    onAdd={() => transition(CREATE)}
                />
            )}
            {mode === SAVE && (
                <Status 
                message="Saving"
                />
            )}
            {mode === SHOW && (
                <Show
                    student={props.interview.student}
                    interviewer={props.interview.interviewer}
                    onEdit={() => transition(EDIT)}
                    onDelete={() => transition(CONFIRM)}
                />
            )}


        </article>
    );
  
}




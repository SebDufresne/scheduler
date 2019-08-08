import React from "react";

import "./styles.scss";
import Form from "./Form";
import Show from "./Show";
import Header from "./Header";
import Error from "./Error";
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
    const ERROR_SAVE = "ERROR_SAVE";
    const ERROR_DELETE = "ERROR_DELETE";

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
                        transition(DELETE,true)
                        props.cancelInterview(props.id)
                        .then(() => transition(EMPTY))
                        .catch(() => {
                            transition(ERROR_DELETE,true)
                        });
                    }}
                    message="Delete the Appointment?"
                />
            )}
            {mode === CREATE && (
                <Form
                    interviewers={props.interviewers}
                    onSave={(name, interviewer) => {
                        transition(SAVE,true)
                        props.bookInterview(props.id,save(name,interviewer))
                        .then(() => transition(SHOW))
                        .catch(() => {
                            transition(ERROR_SAVE,true)
                        });
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
                        transition(SAVE,true)
                        props.bookInterview(props.id,save(name,interviewer))
                        .then(() => transition(SHOW))
                        .catch(() => {
                            transition(ERROR_SAVE,true)
                        });
                }   }
                    onCancel={() => back()}
                />
            )}
            {mode === ERROR_DELETE && (
                <Error
                    message="Could not delete appointment."
                    onClose={() => back()}
                />
            )}
            {mode === ERROR_SAVE && (
                <Error
                    message="Could not save appointment."
                    onClose={() => back()}
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
                    onDelete={() => transition(CONFIRM,true)}
                />
            )}
        </article>
    );
  
}




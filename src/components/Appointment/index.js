import React, { useEffect } from 'react';

import './styles.scss';
import Confirm from './Confirm';
import Empty from './Empty';
import Error from './Error';
import Form from './Form';
import Header from './Header';
import Show from './Show';
import Status from './Status';

import useVisualMode from 'hooks/useVisualMode';

export default function Appointment(props) {
  const CONFIRM = 'CONFIRM';
  const CREATE = 'CREATE';
  const DELETING = 'DELETING';
  const EDIT = 'EDIT';
  const EMPTY = 'EMPTY';
  const ERROR_DELETE = 'ERROR_DELETE';
  const ERROR_SAVE = 'ERROR_SAVE';
  const SAVING = 'SAVING';
  const SHOW = 'SHOW';

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function genInterview(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    return interview;
  }

  useEffect(() => {
    if (props.interview && mode === EMPTY) {
     transition(SHOW);
    }
    if (props.interview === null && mode === SHOW) {
     transition(EMPTY);
    }
   }, [props.interview, transition, mode]);   

  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === CONFIRM && (
        <Confirm
          onCancel={() => transition(SHOW)}
          onConfirm={() => {
            transition(DELETING,true);
            props
              .cancelInterview(props.id)
              .then(() => transition(EMPTY))
              .catch(() => {
                transition(ERROR_DELETE, true);
              });
          }}
          message="Delete the Appointment?"
        />
      )}
      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onSave={(name, interviewer) => {
            transition(SAVING);
            props
              .bookInterview(props.id, genInterview(name, interviewer))
              .then(() => transition(SHOW))
              .catch(() => {
                transition(ERROR_SAVE, true);
              });
          }}
          onCancel={() => back()}
        />
      )}
      {mode === DELETING && <Status message="Deleting" />}
      {mode === EDIT && (
        <Form
          name={props.interview.student}
          interviewer={props.interview.interviewer.id}
          interviewers={props.interviewers}
          onSave={(name, interviewer) => {
            transition(SAVING);
            props
              .bookInterview(props.id, genInterview(name, interviewer))
              .then(() => transition(SHOW))
              .catch(() => {
                transition(ERROR_SAVE, true);
              });
          }}
          onCancel={() => back()}
        />
      )}
      {mode === EMPTY &&
          <Empty onAdd={() => transition(CREATE)} />}
      {mode === ERROR_DELETE && (
        <Error message="Could not delete appointment." onClose={() => back()} />
      )}
      {mode === ERROR_SAVE && (
        <Error message="Could not save appointment." onClose={() => back()} />
      )}
      {mode === SAVING && <Status message="Saving" />}
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

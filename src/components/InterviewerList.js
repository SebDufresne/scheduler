import React from "react";

import InterviewerListItem from "components/InterviewerListItem";


import "components/InterviewerList.scss";

export default function InterviewerList(props) {
  const { interviewers, onChange, value } = props;

  const interviewerList = interviewers.map(interviewer => 
    <InterviewerListItem
      name={interviewer.name}
      avatar={interviewer.avatar}
      selected={interviewer.id === value}
      setInterviewer={event => onChange(interviewer.id)}
    />
  )

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewerList}</ul>
    </section>
  )
}

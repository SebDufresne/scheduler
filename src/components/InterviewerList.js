import React from "react";

import InterviewerListItem from "components/InterviewerListItem";


import "components/InterviewerList.scss";

export default function InterviewerList(props) {
  const interviewerList = props.interviewers.map(interviewer => 
    <InterviewerListItem
      name={interviewer.name}
      avatar={interviewer.avatar}
      selected={interviewer.id === props.value}
      setInterviewer={event => props.onChange(interviewer.id)}
    />
  )

  return (
    <section class="interviewers">
      <h4 class="interviewers__header text--light">{props.name}</h4>
      <ul class="interviewers__list">{interviewerList}</ul>
    </section>
  )
}
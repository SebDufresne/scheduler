const getAppointmentsForDay = (state,day) => {
  const appointmentsId = state.days
      .filter((e) => e.name === day)
      .map((e) => e.appointments)
      .reduce((acc, val) => acc.concat(val), []);

  const appointment = [];
  appointmentsId.forEach((e) => {
    appointment.push(state.appointments[e]);
  })

  return appointment;
}

const getInterviewersForDay = (state,day) => {
  const interviewersId = state.days.filter((e) => e.name === day)
            .map((e) => e.interviewers)
            .reduce((acc, val) => acc.concat(val), []);

  const interviewers = [];
  
  interviewersId.forEach((e) => {
    interviewers.push(state.interviewers[e]);
  })

  return interviewers;
}

// Rertuns an object like: {student, interviewer};
const getInterview = (state, interview) => {
  if (!interview) {
    return null;
  } else {
    const student = interview.student;
    const interviewer = state.interviewers[interview.interviewer];
    const interviewObj = {student, interviewer};
    return interviewObj;
  }
}

module.exports = {
  getAppointmentsForDay,
  getInterviewersForDay,
  getInterview
};
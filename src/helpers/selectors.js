const getAppointmentsForDay = (state,day) => {
  let appointmentsId = state.days
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
  let interviewersId = state.days.filter((e) => e.name === day)
            .map((e) => e.interviewers)
            .reduce((acc, val) => acc.concat(val), []);

            const interviewers = [];
            interviewersId.forEach((e) => {
              interviewers.push(state.interviewers[e]);
            })
  return interviewers;
}

// TO:
// const interviewers = [
//   { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
//   { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
//   { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
//   { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
//   { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" }
// ];

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
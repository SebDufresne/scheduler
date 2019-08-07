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

module.exports = {
  getAppointmentsForDay
};

import React, { useState, useEffect } from "react";

import "components/Application.scss";

import Appointment from "components/Appointment/index";
import DayList from "components/DayList";

import { getAppointmentsForDay, getInterview } from "../helpers/selectors";

const axios = require('axios');


export default function Application(props) {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => setState(prev => ({ ...prev, day }));

  useEffect(() => {
    const days = axios.get(`http://localhost:3001/api/days`);
    const appointments = axios.get(`http://localhost:3001/api/appointments`);
    const interviewers = axios.get(`http://localhost:3001/api/interviewers`);
    Promise.all([days,appointments,interviewers])
    .then(([days, appointments, interviewers]) => 
      setState(prev => ({...prev, days: days.data, appointments: appointments.data, interviewers: interviewers.data}))
    )
  }, []);

  const appointments = getAppointmentsForDay(state, state.day);
  const schedule = appointments.map((appointment) => {
    const interview = getInterview(state, appointment.interview);
  
    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={interview}
      />
    );
  });
  

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <DayList
          days={state.days}
          day={state.day}
          setDay = {day => setDay(day)}
        />
        <nav className="sidebar__menu" />

        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />

      </section>
      <section className="schedule">
        {schedule}
      </section>
    </main>
  );
}

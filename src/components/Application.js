import React, { useState, useEffect } from "react";

import "components/Application.scss";

import Appointment from "components/Appointment/index";
import DayList from "components/DayList";

import { getAppointmentsForDay } from "../helpers/selectors";

const axios = require('axios');

const appointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 3,
    time: "2pm",
    interview: {
      student: "Sebastien Dufresne",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 4,
    time: "3pm",
    interview: {
      student: "Hanxiang Xu",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 5,
    time: "4pm",
    interview: {
      student: "Dominic Tremblay",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  }
];


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

  const appointmentList = getAppointmentsForDay(state, state.day).map(appointment =>  {
    return (<Appointment key={appointment.id} {...appointment} />);
    }
  )

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
        {appointmentList}
      </section>
    </main>
  );
}

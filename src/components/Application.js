import React, { useState, useEffect } from "react";

import "components/Application.scss";

import Appointment from "components/Appointment/index";
import DayList from "components/DayList";

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

const appointmentList = appointments.map(appointment =>  {
    return (<Appointment key={appointment.id} {...appointment} />);
  }
)

export default function Application(props) {

  const [day, setDay] = useState('Monday')
  const [days, setDays] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/days`)
    .then((response) => {
      setDays(response.data);
    })
  }, [day]);

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
          days={days}
          day={day}
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

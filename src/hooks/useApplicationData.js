import { useEffect, useState } from "react";

const axios = require('axios');

export default function useApplicationData() {

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

  const bookInterview = function(id, interview) {
    return axios.put(`http://localhost:3001/api/appointments/${id}`, {interview})
    .then(() => {
      const appointment = {
        ...state.appointments[id],
        interview: { ...interview }
      };
      
      const appointments = {
        ...state.appointments,
        [id]: appointment
      };
        setState({
          ...state,
          appointments
        })
      });
  };

  const cancelInterview = function(id) {
    return axios.delete(`http://localhost:3001/api/appointments/${id}`)
    .then(() => {
      const appointment = {
        ...state.appointments[id],
        interview: null
      };
      const appointments = {
        ...state.appointments,
        [id]: appointment
      };
        setState({
          ...state,
          appointments
        })
      });        
  };

  return {state,
    setDay,
    bookInterview,
    cancelInterview};
}
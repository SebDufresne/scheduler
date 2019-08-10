import { useEffect, useReducer } from "react";

import { reducer,
  SET_APPLICATION_DATA,
  SET_DAY,
  SET_INTERVIEW } from "reducers/application";

const axios = require('axios');

const socket = new WebSocket(process.env.REACT_APP_WEBSOCKET_URL);

export default function useApplicationData() {

  const [state, dispatch] = useReducer(reducer, {
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => dispatch({ type: SET_DAY, day });

  useEffect(() => {
    const days = axios.get(`http://localhost:3001/api/days`);
    const appointments = axios.get(`http://localhost:3001/api/appointments`);
    const interviewers = axios.get(`http://localhost:3001/api/interviewers`);
    Promise.all([days,appointments,interviewers])
    .then(([days, appointments, interviewers]) => 
      dispatch({ type: SET_APPLICATION_DATA, days: days.data, appointments: appointments.data, interviewers: interviewers.data })
    )

  }, []);

  const bookInterview = function(id, interview) {
    return axios.put(`http://localhost:3001/api/appointments/${id}`, {interview})
    .then(() => {
      dispatch({ type: SET_INTERVIEW, id, interview });
    });
  };

  const cancelInterview = function(id) {
    return axios.delete(`http://localhost:3001/api/appointments/${id}`)
    .then(() => {
      dispatch({ type: SET_INTERVIEW, id, interview: null });
    });        
  };

  socket.onmessage = function (event) {
    const {type, id, interview} = JSON.parse(event.data);
    dispatch({ type, id, interview });
  }
  
  return {bookInterview,
    cancelInterview,
    state,
    setDay};
}
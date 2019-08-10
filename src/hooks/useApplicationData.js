import { useEffect, useReducer } from 'react';

import {
  reducer,
  SET_APPLICATION_DATA,
  SET_DAY,
  SET_INTERVIEW
} from 'reducers/application';

const axios = require('axios');

export default function useApplicationData() {

  // Manages the state
  // Interacts with the reducer
  const [state, dispatch] = useReducer(reducer, {
    day: 'Monday',
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => dispatch({ type: SET_DAY, day });

  // Retrieves days, appointments and interviewers from API
  // sends the info to dispatch to update the state
  useEffect(() => {
    const days = axios.get(`http://localhost:3001/api/days`);
    const appointments = axios.get(`http://localhost:3001/api/appointments`);
    const interviewers = axios.get(`http://localhost:3001/api/interviewers`);
    Promise.all([days, appointments, interviewers]).then(
      ([days, appointments, interviewers]) =>
        dispatch({
          type: SET_APPLICATION_DATA,
          days: days.data,
          appointments: appointments.data,
          interviewers: interviewers.data
        })
    );
  }, []);

  // Sends new appointment request to API
  // sends the info to dispatch to update the state
  const bookInterview = function(id, interview) {
    return axios
      .put(`http://localhost:3001/api/appointments/${id}`, { interview })
      .then(() => {
        dispatch({ type: SET_INTERVIEW, id, interview });
      });
  };

  // Sends cancellation request to API
  // sends the info to dispatch to update the state
  const cancelInterview = function(id) {
    return axios
      .delete(`http://localhost:3001/api/appointments/${id}`)
      .then(() => {
        dispatch({ type: SET_INTERVIEW, id, interview: null });
      });
  };

  // Responsible for the Web Socket connection
  useEffect(() => {
    const socket = new WebSocket(process.env.REACT_APP_WEBSOCKET_URL);

    socket.onmessage = function(event) {
      const data = JSON.parse(event.data);

      if (typeof data === 'object' && data.type) {
        return dispatch(data);
      }
    };
  }, []);

  return { bookInterview, cancelInterview, state, setDay };
}

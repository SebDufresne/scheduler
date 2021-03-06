# Scheduler Project

React scheduler with up to five appointments per day. The information will be synced over multiple clients with the help of Web Sockets.

## Final Product

### Opening page

Landing page, with up to five appointments per day and dynamic counter for the remaining spots.

!["opening page"](https://github.com/SebDufresne/scheduler/blob/master/docs/main-view.png)

### Creating a new appointment

Allows the creation (or edition) of an appointment, by entering the name and selecting the interviewer.

!["create new appointment"](https://github.com/SebDufresne/scheduler/blob/master/docs/add-appointment.png)

### Contextual warnings

Warns the user if name field was left empty.

!["contextual error"](https://github.com/SebDufresne/scheduler/blob/master/docs/contextual-errors.png)

### Adaptive design

Mobile ready platform.

!["adaptive design"](https://github.com/SebDufresne/scheduler/blob/master/docs/adaptive-design.png)

### Transition states

Saving and deleting animated transitions.

!["state transitions"](https://github.com/SebDufresne/scheduler/blob/master/docs/transition-states.png)

### Deletion confirmation

Confirms deletion of appointments.

!["deletion confirmation"](https://github.com/SebDufresne/scheduler/blob/master/docs/deletion-confirmation.png)

### Error handling

Displays error in case of an error reaching the API.

!["error handling"](https://github.com/SebDufresne/scheduler/blob/master/docs/error-handling.png)

### Storybook Component Tests

Built-in [storybook](https://storybook.js.org/) components tests.

!["storybook tests"](https://github.com/SebDufresne/scheduler/blob/master/docs/mockup-storybook.png)

### Cypress E2E Tests

Built-in [cypress](https://www.cypress.io/) end to end tests.

!["cypress tests"](https://github.com/SebDufresne/scheduler/blob/master/docs/tests-cypress.png)

### Jest Unit Tests

Built-in [jest](https://jestjs.io/) test coverage.

!["jest tests"](https://github.com/SebDufresne/scheduler/blob/master/docs/tests-jest.png)

## Dependencies

- axios
- classnames
- normalize.css
- react
- react-dom
- react-scripts

## Getting Started

- Install all dependencies (using the `npm install` command).
- Get and install the [server](https://github.com/lighthouse-labs/scheduler-api).
- Run both the server and the client.

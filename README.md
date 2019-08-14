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





!["screen capture of login menu"](https://github.com/SebDufresne/scheduler/blob/master/docs/adaptive-design.png)


### Details for one URL

A list of every visit for a given short URL, sorted by dates, from most recent to oldest.

!["screen capture of details for one URL"](https://github.com/SebDufresne/scheduler/blob/master/docs/transition-states.png)

### Summary of all short URLs

List all the short URLs for a given user.

!["screen capture of Summary of all short URLs"](https://github.com/SebDufresne/scheduler/blob/master/docs/deletion-confirmation.png)

!["screen capture of details for one URL"](https://github.com/SebDufresne/scheduler/blob/master/docs/error-handling.png)

### Summary page for each URL

Give detailed information about short URL usage, and allows edits to the path given to the shorten version.

!["screen capture of details for one URL"](https://github.com/SebDufresne/scheduler/blob/master/docs/mockup-storybook.png)
!["screen capture of details for one URL"](https://github.com/SebDufresne/scheduler/blob/master/docs/tests-cypress.png)
!["screen capture of details for one URL"](https://github.com/SebDufresne/scheduler/blob/master/docs/tests-jest.png)


## Dependencies

- Node.js
- Express
- EJS
- bcrypt
- body-parser
- cookie-session
- cookie-parser
- method-override
- moment-timezone
- uuid

## Getting Started

- Install all dependencies (using the `npm install` command).
- Run the development web server using the `node express_server.js` command.

## Current Limitations/Bugs/Future Features

- BUG: The selected menu item doesn't highlight properly
- BUG: There's a "blind spot" behind the footer, where items can be unaccessible
- TO-DO: Re-style the tables with a grid approach.
- TO-DO: Review the breakpoints for a mobile first approach.
- TO-DO: Add the number of users/total visits on URL index page.

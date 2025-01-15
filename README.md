# Express.js Route Handler Missing Error Handling

This repository demonstrates a common error in Express.js route handlers: missing error handling for invalid input.  The example shows a route that fetches a user by ID.  If the ID is not a valid integer, the application might crash or return an unexpected error.

The `bug.js` file contains the erroneous code. The `bugSolution.js` file shows how to fix the error by adding proper error handling.
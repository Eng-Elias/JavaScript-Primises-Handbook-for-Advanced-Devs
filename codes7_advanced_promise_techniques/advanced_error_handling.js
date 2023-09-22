const Promise = require("bluebird"); // Using bluebird for advanced error handling

function throwError() {
  return Promise.reject(new Error("Simulated error"));
}

throwError()
  .catch(Promise.CancellationError, (error) => {
    console.error("Cancellation Error:", error.message);
  })
  .catch(Promise.TimeoutError, (error) => {
    console.error("Timeout Error:", error.message);
  })
  .catch((error) => {
    console.error("Other Error:", error.message);
  });

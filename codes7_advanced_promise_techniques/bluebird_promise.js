const Promise = require("bluebird");

// Simulated async function that takes longer than the timeout
const asyncTask = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task completed successfully");
    }, 3000); // Simulating a task that takes 3 seconds to complete
  });
};

// Set a timeout of 2 seconds for the async task
const timeout = 2000;

// Execute the async task with a timeout
asyncTask()
  .timeout(timeout)
  .then((result) => {
    console.log("Task completed within the timeout:", result);
  })
  .catch(Promise.TimeoutError, (error) => {
    console.error(
      "Task timed out after",
      timeout,
      "milliseconds:",
      error.message
    );
  });

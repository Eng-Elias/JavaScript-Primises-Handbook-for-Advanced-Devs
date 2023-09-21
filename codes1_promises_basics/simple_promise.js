// Simulated function to fetch data from a server
function fetchDataFromServer() {
  return new Promise((resolve, reject) => {
    const success = true; // Simulating a successful request, set to false to simulate a failure

    // Simulate server response time (1 second delay)
    setTimeout(() => {
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject(new Error("Failed to fetch data."));
      }
    }, 1000);
  });
}

// Consuming the Promise
fetchDataFromServer()
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

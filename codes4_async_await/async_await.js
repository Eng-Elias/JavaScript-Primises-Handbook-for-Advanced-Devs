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

// Using async/await to consume the Promise
async function fetchAsyncData() {
  try {
    const data = await fetchDataFromServer();
    console.log("Success:", data);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Calling the async function
fetchAsyncData();

function fetchData() {
  console.log("Fetching data...");
  return new Promise((resolve, reject) => {
    // Simulated async operation with network latency
    setTimeout(() => {
      console.log("Fetched data.");
      resolve("Data");
    }, 2000); // Simulate network latency (e.g., 2 seconds)
  });
}

function batchRequests(requests) {
  // Simulated batch request logic
  console.log("Batching requests:", requests);
  return Promise.all(requests.map((request) => fetchData(request)));
}

const requestBatch = ["api/endpoint1", "api/endpoint2", "api/endpoint3"];

batchRequests(requestBatch)
  .then((data) => {
    console.log("Batch request completed. Data:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

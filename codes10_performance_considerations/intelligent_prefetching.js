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

const prefetchQueue = [];

function addToPrefetchQueue(url) {
  prefetchQueue.push(url);
}

function processPrefetchQueue() {
  const requests = prefetchQueue.splice(0, 3); // Simulate processing 3 requests
  if (requests.length > 0) {
    console.log("Processing prefetch requests:", requests);
    return batchRequests(requests);
  }
}

// Simulated usage: Add URLs to the prefetch queue
addToPrefetchQueue("api/endpoint1");
addToPrefetchQueue("api/endpoint2");
addToPrefetchQueue("api/endpoint3");
addToPrefetchQueue("api/endpoint4");
addToPrefetchQueue("api/endpoint5");

// Simulated usage: Process the prefetch queue after a delay
const interval = setInterval(() => {
  processPrefetchQueue()
    .then((data) => {
      console.log("Prefetch completed. Data:", data);
      for (let i = 0; i < Math.random() * 3; i++) {
        addToPrefetchQueue("api/extra_endpoint");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}, 5000); // Simulate a delay before processing prefetch requests

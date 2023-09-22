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

function processData(data) {
  return new Promise((resolve) => {
    console.log("Processing data:", data);
    setTimeout(() => {
      console.log("Data processed:", data);
      resolve(data);
    }, Math.random() * 10000); // Simulate varying processing times
  });
}

fetchData()
  .then((data) => {
    if (!data) return Promise.reject(new Error("No data available"));
    // Process data
    return processData(data);
  })
  .then((result) => {
    // Handle result
  })
  .catch((error) => {
    // Handle errors
  });

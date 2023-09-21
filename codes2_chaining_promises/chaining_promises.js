// Simulated function to fetch data from a server
function fetchDataFromServer(url) {
  return new Promise((resolve, reject) => {
    const success = true; // Simulating a successful request, set to false to simulate a failure

    // Simulate server response time (1 second delay)
    setTimeout(() => {
      if (success) {
        resolve(`Data fetched from ${url}`);
      } else {
        reject(new Error(`Failed to fetch data from ${url}`));
      }
    }, 1000);
  });
}

// Chaining Promises to simulate sequential API requests
fetchDataFromServer("api/endpoint1")
  .then((data1) => {
    console.log(data1);
    return fetchDataFromServer("api/endpoint2");
  })
  .then((data2) => {
    console.log(data2);
    return fetchDataFromServer("api/endpoint3");
  })
  .then((data3) => {
    console.log(data3);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

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

const cache = new Map();

function fetchDataWithCache(url) {
  if (cache.has(url)) {
    console.log("Data fetched from cache for:", url);
    return Promise.resolve(cache.get(url));
  }

  return fetchData(url).then((data) => {
    console.log("Data fetched from server for:", url);
    cache.set(url, data);
    return data;
  });
}

fetchDataWithCache("api/endpoint1")
  .then((data) => {
    console.log("Data:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

setTimeout(() => {
  fetchDataWithCache("api/endpoint1")
    .then((data) => {
      console.log("Data:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}, 4000);

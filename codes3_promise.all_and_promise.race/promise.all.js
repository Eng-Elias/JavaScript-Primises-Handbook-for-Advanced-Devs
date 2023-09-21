// Simulated functions to fetch data from different sources
function fetchDataFromSource1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data from source 1"), 1000);
  });
}

function fetchDataFromSource2() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data from source 2"), 500);
  });
}

const promises = [fetchDataFromSource1(), fetchDataFromSource2()];

Promise.all(promises)
  .then((dataArray) => {
    console.log("All data fetched successfully:", dataArray);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

const dataArray = Array.from({ length: 50 }, (_, index) => index + 1);

function processData(data) {
  return new Promise((resolve) => {
    console.log("Processing data:", data);
    setTimeout(() => {
      console.log("Data processed:", data);
      resolve(data);
    }, Math.random() * 10000); // Simulate varying processing times
  });
}

function processInChunks(chunkSize) {
  const chunks = [];
  for (let i = 0; i < dataArray.length; i += chunkSize) {
    chunks.push(dataArray.slice(i, i + chunkSize));
  }

  const results = [];
  let currentIndex = 0;

  function processNextChunk() {
    if (currentIndex < chunks.length) {
      const chunk = chunks[currentIndex];
      const promises = chunk.map((data) => processData(data));
      currentIndex++;

      return Promise.all(promises).then((chunkResults) => {
        results.push(chunkResults);
        return processNextChunk();
      });
    } else {
      return Promise.resolve(results);
    }
  }

  return processNextChunk();
}

const chunkSize = 4;

processInChunks(chunkSize)
  .then(() => {
    console.log("All data processed!");
  })
  .catch((error) => {
    console.error("Error:", error);
  });

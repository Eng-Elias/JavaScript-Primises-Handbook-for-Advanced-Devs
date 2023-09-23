// Check if the browser supports Promises
if (!window.Promise) {
  console.log("Browser does not support Promises. Applying polyfill.");
}

// Use the Promise polyfill
const myPromise = new Promise((resolve, reject) => {
  const success = true; // Modify to simulate success or failure

  if (success) {
    resolve("Polyfill: Operation completed successfully.");
  } else {
    reject("Polyfill: Operation failed.");
  }
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

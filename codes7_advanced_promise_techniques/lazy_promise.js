let lazyPromise;

function getLazyPromise() {
  if (!lazyPromise) {
    lazyPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve("Lazy-loaded data");
      }, 2000);
    });
  }
  return lazyPromise;
}

// Simulated usage
getLazyPromise().then((data) => {
  console.log(data); // Output after 2 seconds: Lazy-loaded data
});

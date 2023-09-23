function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);
    console.log("timeout is cleared");
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
    console.log("new timeout is started");
  };
}

// Example usage
function debouncedFunction() {
  console.log("Debounced function called.");
}

const debounced = debounce(debouncedFunction, 300);

// Simulated usage: calls the debounced function frequently
let i = 5;
const interval = setInterval(() => {
  debounced();
  i--;
  if (i === 0) clearInterval(interval);
}, 200);

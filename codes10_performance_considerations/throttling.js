function throttle(func, delay) {
  let lastCallTime = 0;

  return function (...args) {
    const now = Date.now();
    if (now - lastCallTime >= delay) {
      func(...args);
      lastCallTime = now;
    } else {
      console.log("Throttled function doesn't call.");
    }
  };
}

// Example usage
function throttledFunction() {
  console.log("Throttled function called.");
}

const throttled = throttle(throttledFunction, 500);

// Simulated usage: calls the throttled function frequently
setInterval(() => {
  throttled();
}, 100);

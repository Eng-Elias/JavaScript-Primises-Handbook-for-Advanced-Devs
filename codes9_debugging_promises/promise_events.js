function fetchUserData() {
  const promise = new Promise((resolve, reject) => {
    // Simulated async operation
    setTimeout(() => {
      const data = { name: "John Doe", age: 30 };
      resolve(data);
    }, 1000);
  });

  promise
    .then((userData) => {
      console.log("User data received:", userData);
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });

  promise.finally(() => {
    console.log("Promise finally block executed");
  });

  return promise;
}

fetchUserData();

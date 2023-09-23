function fetchUserData() {
  console.trace("Fetching user data...");
  return new Promise((resolve, reject) => {
    // Simulated async operation
    setTimeout(() => {
      const data = { name: "John Doe", age: 30 };
      console.trace("Fetched user data:", data);
      resolve(data);
    }, 1000);
  });
}

fetchUserData()
  .then((userData) => {
    console.trace("User data received:", userData);
  })
  .catch((error) => {
    console.error("Error fetching user data:", error);
  });

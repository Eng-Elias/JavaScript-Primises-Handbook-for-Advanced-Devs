function fetchUserData() {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}

fetchUserData()
  .then((data) => console.log("Fetched user data:", data))
  .catch((error) => console.error("Error fetching user data:", error));

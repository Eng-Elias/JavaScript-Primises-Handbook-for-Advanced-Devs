class NetworkError extends Error {
  constructor(endpoint) {
    super(`Error fetching data from endpoint: ${endpoint}`);
    this.name = "NetworkError";
    this.endpoint = endpoint;
  }
}

class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

// Simulated function to validate user input
function validateInput(input) {
  if (!input) {
    throw new ValidationError("Input cannot be empty.", "inputField");
  }
}

// Simulated function to fetch data from a server
function fetchDataFromServer() {
  const success = true; // Simulating a successful request, set to false to simulate a failure

  if (!success) {
    throw new NetworkError("https://api.example.com");
  }

  return "Data fetched successfully!";
}

try {
  // Simulate user input validation
  validateInput("");
  // Simulate fetching data from the server
  fetchDataFromServer();
} catch (error) {
  if (error instanceof ValidationError) {
    console.error(
      "Validation Error:",
      error.message,
      "for field:",
      error.field
    );
  } else if (error instanceof NetworkError) {
    console.error(
      "Network Error:",
      error.message,
      "for endpoint:",
      error.endpoint
    );
  } else {
    console.error("Error:", error.message);
  }
}

class DatabaseError extends Error {
  constructor(message, query) {
    super(message);
    this.name = "DatabaseError";
    this.query = query;
  }
}

// Simulated function to query a database
function queryDatabase(query) {
  return new Promise((resolve, reject) => {
    const success = false; // Simulating a successful query, set to false to simulate a failure

    if (!success) {
      reject(new DatabaseError("Error executing database query", query));
    } else {
      resolve("Query results");
    }
  });
}

const query = "SELECT * FROM users";
queryDatabase(query)
  .then((results) => {
    console.log("Query successful. Results:", results);
  })
  .catch((error) => {
    if (error instanceof DatabaseError) {
      console.error(
        "Database Error:",
        error.message,
        "for query:",
        error.query
      );
    } else {
      console.error("Error:", error.message);
    }
  });

const fetchUserData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
};

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
};

const fetchComments = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  return response.json();
};
const fetchAllData = async () => {
  const [userData, posts, comments] = await Promise.all([
    fetchUserData(),
    fetchPosts(),
    fetchComments(),
  ]);
  console.log("Fetched user data:", userData.slice(0, 5));
  console.log("Fetched posts:", posts.slice(0, 5));
  console.log("Fetched comments:", comments.slice(0, 5));
};

fetchAllData().catch((error) => console.error("Error fetching data:", error));

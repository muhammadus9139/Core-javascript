// Async/Await - Promises ko synchronous jaisa likhna

async function getUser() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let data = await response.json();
    console.log(data);
}
getUser();

// Error handling - try/catch
async function getUserSafe(id) {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        let data = await response.json();
        return data;
    } catch (err) {
        console.log("Error:", err.message);
    }
}

// Chaining - flat code
async function getUserAndPosts() {
    try {
        let userRes = await fetch("https://jsonplaceholder.typicode.com/users/1");
        let user = await userRes.json();
        console.log("User:", user.name);

        let postsRes = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
        let posts = await postsRes.json();
        console.log("Posts:", posts.length);
    } catch (err) {
        console.log("Error:", err.message);
    }
}
getUserAndPosts();

// Parallel requests
async function parallel() {
    let [users, posts] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users").then(r => r.json()),
        fetch("https://jsonplaceholder.typicode.com/posts").then(r => r.json())
    ]);
    console.log(users.length, posts.length);
}
parallel();

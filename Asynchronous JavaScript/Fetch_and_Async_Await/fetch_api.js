// Fetch API - modern tarika, Promise return karta hai

fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => {
        console.log(response);
        console.log(response.status);
        return response.json(); // response body parse karna
    })
    .then(data => {
        console.log(data);
        console.log(data.name);
    });

// POST request
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "New Post",
        body: "Post content",
        userId: 1
    })
})
    .then(res => res.json())
    .then(data => console.log(data));

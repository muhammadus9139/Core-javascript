// Fetch errors handle karna

// Network error - fetch reject karta hai
// HTTP error (404, 500) - fetch reject NAHI karta!

fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(err => console.log("Error:", err.message));

// 404 example
fetch("https://jsonplaceholder.typicode.com/users/99999")
    .then(response => {
        console.log(response.ok);     // false
        console.log(response.status); // 404
        if (!response.ok) {
            throw new Error("User not found");
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(err => console.log("Caught:", err.message));

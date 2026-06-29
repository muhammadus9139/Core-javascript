// XHR ko Promise mein wrap karna

function fetchData(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);

        xhr.onload = function() {
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject(`Error: ${xhr.status}`);
            }
        };

        xhr.onerror = () => reject("Network Error");
        xhr.send();
    });
}

// Ab chain kar sakte hain
fetchData("https://jsonplaceholder.typicode.com/users/1")
    .then(user => {
        console.log("User:", user.name);
        return fetchData(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
    })
    .then(posts => {
        console.log("Posts:", posts.length);
    })
    .catch(err => console.log("Error:", err));

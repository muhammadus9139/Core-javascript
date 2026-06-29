// XHR requests chain karna - ek ke baad ek

function getUser(id, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `https://jsonplaceholder.typicode.com/users/${id}`);
    xhr.onload = function() {
        if (xhr.status === 200) {
            callback(null, JSON.parse(xhr.responseText));
        } else {
            callback("Error: " + xhr.status);
        }
    };
    xhr.onerror = () => callback("Network Error");
    xhr.send();
}

function getPosts(userId, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    xhr.onload = function() {
        if (xhr.status === 200) {
            callback(null, JSON.parse(xhr.responseText));
        } else {
            callback("Error: " + xhr.status);
        }
    };
    xhr.onerror = () => callback("Network Error");
    xhr.send();
}

getUser(1, function(err, user) {
    if (err) return console.log(err);
    console.log("User:", user.name);

    getPosts(user.id, function(err, posts) {
        if (err) return console.log(err);
        console.log("Posts count:", posts.length);
    });
});

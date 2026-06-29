// Callback Hell ko Promises se flat karna

function getUser(id) {
    return new Promise(resolve => {
        setTimeout(() => resolve({ id, name: "Ali" }), 1000);
    });
}

function getPosts(userId) {
    return new Promise(resolve => {
        setTimeout(() => resolve(["Post1", "Post2"]), 1000);
    });
}

function getComments(post) {
    return new Promise(resolve => {
        setTimeout(() => resolve(["Comment1", "Comment2"]), 1000);
    });
}

// Callback Hell ki jagah flat chain
getUser(1)
    .then(user => {
        console.log("User:", user);
        return getPosts(user.id);
    })
    .then(posts => {
        console.log("Posts:", posts);
        return getComments(posts[0]);
    })
    .then(comments => {
        console.log("Comments:", comments);
    })
    .catch(err => console.log("Error:", err));

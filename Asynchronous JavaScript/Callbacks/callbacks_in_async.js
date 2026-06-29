// Callbacks asynchronous programming mein

function loadUser(userId, callback) {
    setTimeout(() => {
        let user = { id: userId, name: "Ali" };
        callback(null, user);
    }, 1000);
}

function loadPosts(userId, callback) {
    setTimeout(() => {
        let posts = ["Post 1", "Post 2", "Post 3"];
        callback(null, posts);
    }, 1000);
}

function loadComments(postId, callback) {
    setTimeout(() => {
        let comments = ["Comment 1", "Comment 2"];
        callback(null, comments);
    }, 1000);
}

// Callbacks use karna
loadUser(1, function(err, user) {
    if (err) return console.log(err);
    console.log("User:", user);

    loadPosts(user.id, function(err, posts) {
        if (err) return console.log(err);
        console.log("Posts:", posts);
    });
});

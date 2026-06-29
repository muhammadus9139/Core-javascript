// Callback Hell - nested callbacks - pyramid of doom

function getUser(id, callback) {
    setTimeout(() => callback(null, { id, name: "Ali" }), 1000);
}
function getPosts(userId, callback) {
    setTimeout(() => callback(null, ["Post1", "Post2"]), 1000);
}
function getComments(post, callback) {
    setTimeout(() => callback(null, ["Comment1", "Comment2"]), 1000);
}
function getLikes(comment, callback) {
    setTimeout(() => callback(null, 42), 1000);
}

// Callback Hell
getUser(1, function(err, user) {
    getPosts(user.id, function(err, posts) {
        getComments(posts[0], function(err, comments) {
            getLikes(comments[0], function(err, likes) {
                console.log(likes);
                // Aur andar jata rahega...
                // Yahi Pyramid of Doom hai
            });
        });
    });
});

// Solution: Promises ya Async/Await use karo

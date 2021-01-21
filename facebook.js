let post = {

    firstName: "Ari",
    lastName: "Lennox",
    message: "Who wants to hear some new music?",
    likes: 1000000,
    shares: 75998464615118

}

post.likes = 10;
post["firstName"] = "Denae";

post["message"] = "I have new music on the way, stay tuned."
console.log(post.likes)
console.log(post.firstName)
console.log(post["message"])
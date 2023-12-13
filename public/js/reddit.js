
fetch("/posts")
.then((res) => {
    return res.json()
})

.then((posts) => {
    console.log(posts)

    posts.forEach((post) => {
        console.log(post)

        // Get the post information
        const postTitle = post.title
        const postImage = post.image
        const postUpvotes = post.upvotes
        const postAuthor = post.author
        const postSubReddit = post.subreddit
        const postID = post.id

        // Create HTML Elements
        let postDiv = document.createElement("div")
        let postUpvoteTag = document.createElement("p")
        let postImg = document.createElement("img")
        let postInfoDiv = document.createElement("div")
        let postTitleTag = document.createElement("h3")
        let postDetailDiv = document.createElement("div")
        let postAuthorTag = document.createElement("p")
        let postSubredditTag = document.createElement("p")
        let upvoteContainerDiv = document.createElement("div")
        let upvoteButton = document.createElement("button")
        let downvoteButton = document.createElement("button")

        // Format our html 
        upvoteContainerDiv.appendChild(upvoteButton)
        upvoteContainerDiv.appendChild(postUpvoteTag)
        upvoteContainerDiv.appendChild(downvoteButton)

        postUpvoteTag.id = postID

        postDiv.appendChild(upvoteContainerDiv)

        postDiv.appendChild(postImg)
        postDiv.appendChild(postInfoDiv)

        postInfoDiv.appendChild(postTitleTag)
        postInfoDiv.appendChild(postDetailDiv)

        postDetailDiv.appendChild(postAuthorTag)
        postDetailDiv.appendChild(postSubredditTag)

        // Add Classes to our html elements

        postDiv.classList.add("posts")
        postUpvoteTag.classList.add("upvotes")
        postImg.classList.add("post-image")
        postInfoDiv.classList.add("post-info")
        postTitleTag.classList.add("post-title")
        postDetailDiv.classList.add("post-details")
        postAuthorTag.classList.add("post-author")
        postSubredditTag.classList.add("post-subreddit")
        upvoteContainerDiv.classList.add("upvote-container")

        // Put our info in our tag
        postUpvoteTag.innerText = postUpvotes
        postImg.src = postImage
        postTitleTag.innerText = postTitle
        postAuthorTag.innerText = postAuthor
        postSubredditTag.innerText = postSubReddit
        upvoteButton.innerText = "⬆️"
        downvoteButton.innerText = "⬇️"

        // Add functionality to our functions
        upvoteButton.setAttribute("onclick", `upvote(${postID})`)
        downvoteButton.setAttribute("onclick", `downvote(${postID})`)

        // Put our posts on the page
        const postContainer = document.getElementById("post-container")
        postContainer.appendChild(postDiv)
})
})



.catch((error) => {
    console.log(error)
})


function upvote(id) {
    fetch(`/upvote/${id}`)
    .then((response) => {
        return response.json
    })
    .then((json) => {

    })
    const postUpvoteTag = document.getElementById(id)
    postUpvoteTag.innerText = Number(postUpvoteTag.innerText) + 1

}



function downvote(id) {
    fetch(`downvote/${id}`)
    .then((response) => {
        return response.json
    })
    .then((json) => {

    })
const postUpvoteTag = document.getElementById(id)
postUpvoteTag.innerText = Number(postUpvoteTag.innerText) - 1 

}


function getPostsBySubreddit(subreddit) {
    fetch(`subreddit/${subreddit}`)
    .then((response) => {
        return response.json()
    })

    .then((json) => {
        console.log(json)
        displayPosts(json)
    })
    .catch((error) => {
        console.log(error)
    })
}


function displayPosts(posts) {

    const postContainer = document.getElementById("post-container")
    postContainer.innerHTML = ""

    
    posts.forEach((post) => {
        const postTitle = post.title
        const postImage = post.image
        const postUpvotes = post.upvotes
        const postAuthor = post.author
        const postSubReddit = post.subreddit
        const postID = post.id

    // Create HTML Elements
    let postDiv = document.createElement("div")
    let postUpvoteTag = document.createElement("p")
    let postImg = document.createElement("img")
    let postInfoDiv = document.createElement("div")
    let postTitleTag = document.createElement("h3")
    let postDetailDiv = document.createElement("div")
    let postAuthorTag = document.createElement("p")
    let postSubredditTag = document.createElement("p")
    let upvoteContainerDiv = document.createElement("div")
    let upvoteButton = document.createElement("button")
    let downvoteButton = document.createElement("button")

    // Format our html 
    upvoteContainerDiv.appendChild(upvoteButton)
    upvoteContainerDiv.appendChild(postUpvoteTag)
    upvoteContainerDiv.appendChild(downvoteButton)

    postUpvoteTag.id = postID

    postDiv.appendChild(upvoteContainerDiv)

    postDiv.appendChild(postImg)
    postDiv.appendChild(postInfoDiv)

    postInfoDiv.appendChild(postTitleTag)
    postInfoDiv.appendChild(postDetailDiv)

    postDetailDiv.appendChild(postAuthorTag)
    postDetailDiv.appendChild(postSubredditTag)

    // Add Classes to our html elements

    postDiv.classList.add("posts")
    postUpvoteTag.classList.add("upvotes")
    postImg.classList.add("post-image")
    postInfoDiv.classList.add("post-info")
    postTitleTag.classList.add("post-title")
    postDetailDiv.classList.add("post-details")
    postAuthorTag.classList.add("post-author")
    postSubredditTag.classList.add("post-subreddit")
    upvoteContainerDiv.classList.add("upvote-container")

    // Put our info in our tag
    postUpvoteTag.innerText = postUpvotes
    postImg.src = postImage
    postTitleTag.innerText = postTitle
    postAuthorTag.innerText = postAuthor
    postSubredditTag.innerText = postSubReddit
    upvoteButton.innerText = "⬆️"
    downvoteButton.innerText = "⬇️"

    // Add functionality to our functions
    upvoteButton.setAttribute("onclick", `upvote(${postID})`)
    downvoteButton.setAttribute("onclick", `downvote(${postID})`)

    // Put our posts on the page
    const postContainer = document.getElementById("post-container")
    postContainer.appendChild(postDiv)
})
}
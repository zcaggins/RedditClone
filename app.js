const express = require("express")
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, '/public')))
// 
    // 1. Setup a basic UI ✅
    // 2. Create posts(seeding) ✅
    // 3. Display those posts on the webpage
        // a. create a path to send our data ✅
        // b. fetch data from express ✅
        // c. create html elements ✅
    // 4. Be able to upvote and downvote posts 
        // a. Add buttons to our posts
        // b. When you click the button it should ad 1 to upvotes if its upvoted and subtract 1 if its downvoted
            // 1. Create an onlick function for our buttons
            // 2. Post to our Express app that we need to update value
            // 3. Create routes for upvoting and downvoting
            // 4. Convert our string to a number
            // 5. Update upvote value in the array
            // Hook up the buttons
    // 5. View Specific subreddits
    //      a. Add a navbar to our html so users can select diff subreddits
        //  b. Create a route that returns posts from a specific subreddit
        //  c. display posts from subreddit on our webpage

    // Last: CSS
// 



let posts = [
    {
        "id": "1",
        "upvotes": "1000",
        "image": "https://www.brightbulbdesign.co.uk/wp-content/uploads/2018/10/Pricing-Blog-Ft-Img.jpg",
        "title": "What has become so expensive that it's not worth buying anymore?",
        "author": "Zachary",
        "subreddit": "News"
    },
    {
        "id": "2",
        "upvotes": "5300",
        "image": "https://preview.redd.it/ughajpqjssb91.jpg?width=685&auto=webp&s=3b105d2bbbc6d4ad8286d5f2a93508423f2579d8",
        "title": "This is where gaming design peaked",
        "author": "giteam",
        "subreddit": "Gaming"
    },
    {
        "id": "3",
        "upvotes": "3476",
        "image": "https://silipos.com/wp-content/uploads/2021/12/Silipos-Benefits-of-Winter-TrainingSilipos-Benefits-of-Winter-Training-4-1.jpg",
        "title": "It's that time!! - Winter/cold weather running and gear thread",
        "author": "_Alic3",
        "subreddit": "Weather"
    },
    {
        "id": "4",
        "upvotes": "1700",
        "image": "https://i.scdn.co/image/ab67616d0000b273d7bae4ad0b91f65e0dd910c8",
        "title": "[FRESH ALBUM] Smino - Luv 4 Rent",
        "author": "xpanta",
        "subreddit": "Music"
    },
    {
        "id": "5",
        "upvotes": "2000",
        "image": "https://thehill.com/wp-content/uploads/sites/2/2019/04/healthcare_protestor_031319sr_lead.jpg?w=1280",
        "title": "Would Universal Health Care help Americans build more wealth?",
        "author": "NotAnotherTaxAudit",
        "subreddit": "News"
    },
    {
        "id": "6",
        "upvotes": "7833",
        "image": "https://upload.wikimedia.org/wikipedia/en/thumb/3/38/Hive_Mind_-_The_Internet_%28Vinyl%29.jpg/220px-Hive_Mind_-_The_Internet_%28Vinyl%29.jpg",
        "title": "[FRESH ALBUM] The Internet - Hive Mind",
        "author": "JohnSmall",
        "subreddit": "Music"
    },

]

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/reddit.html'))
})

// Create post route
app.get("/posts/", (req, res) => {
    res.send(posts)

})

// Create a route for upvoting
app.get("/upvote/:id", (req, res) => {
    const id = req.params.id

    for(let i = 0; i < posts.length; i++) {
        if(posts[i].id === id) {
            let upvotes = Number(posts[i].upvotes)
            upvotes = upvotes + 1
            posts[i].upvotes = upvotes.toString()
        }
    }
})


// Create a route for downvoting
app.get("/downvote/:id", (req, res) => {
    const id = req.params.id

    for(let i = 0; i < posts.length; i++) {
        if(posts[i].id === id) {
            let downvotes = Number(posts[i].upvotes)
            downvotes = downvotes - 1
            posts[i].upvotes = downvotes.toString()
        }
    }
})

app.get("/subreddit/:subreddit", (req, res) => {
    const subreddit = req.params.subreddit

    const subredditPosts = []
    
    for(let i = 0; i < posts.length; i++) {
        if(posts[i].subreddit === subreddit) {
            subredditPosts.push(posts[i])
        }
    }
    res.send(subredditPosts)
})



app.listen(3000)
console.log("Express app is running!")
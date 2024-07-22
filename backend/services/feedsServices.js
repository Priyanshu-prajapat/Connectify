

export function getAllFeeds(req, res) {
    return res.status(200).send("here we send all the feeds related to auth user.")
}

export function getParticularFeed(req, res) {
    console.log(req.params)
    const num = req.params.postId;
    if (req.params)
        return res.status("300").send("we sending post NO.", num)
    return res.status("200").send("post not found.")
}
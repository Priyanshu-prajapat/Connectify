

export function getAllFeeds(req, res) {
    return res.status(200).send("here we send all the feeds related to auth user.")
}

export function getParticularFeed(req, res) {
    const num = req.params;
    if (req.params)
        return res.status(200).send("we sending post NO.", num)
    return res.status(200).send("post not found.")
}
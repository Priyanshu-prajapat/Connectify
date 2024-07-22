
export function userSignup(req, res) {
    if (req.body.email)
        return res.send("user is signing up here.")
    return res.send("user's data not came.")
}

export function userSignin(req, res) {
    if (req.body.email)
        return res.send("user is signing up here.")
    return res.send("user's data not came.")
}

export function userSignout(req, res) {
    return res.send("user is signing out here.")
}
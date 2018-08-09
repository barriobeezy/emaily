// Live production keys go here, this code gets pushed to heroku/digitalOcean

module.exports = {
    // ClientId:  (public token, ok if people get this)
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    // ClientSecret:  (no one should get this ever! secret means absolute secret!)
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // mLab mongoURI
    mongoURI: process.env.MONGO_URI,
    // cookie key
    cookieKey: process.env.COOKIE_KEY
};
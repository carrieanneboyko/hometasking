const withSass = require("@zeit/next-sass");

require("dotenv").config();

module.exports = (phase, { defaultConfig }) => {
  return withSass({
    env: {
      TWITTER_API_KEY:
        process.env.TWITTER_API_KEY || process.env.REACT_APP_TWITTER_API_KEY,
      TWITTER_SECRET_KEY:
        process.env.TWITTER_SECRET_KEY ||
        process.env.REACT_APP_TWITTER_SECRET_KEY,
      TWITTER_TOKEN:
        process.env.TWITTER_TOKEN || process.env.REACT_APP_TWITTER_TOKEN,
      TWITTER_TOKEN_SECRET:
        process.env.TWITTER_TOKEN_SECRET ||
        process.env.REACT_APP_TWITTER_TOKEN_SECRET,
      MONGOLAB_URI: process.env.MONGOLAB_URI || "mongodb://localhost:27017/",
      AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
      AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
      AUTH0_REDIRECT_URI: process.env.AUTH0_REDIRECT_URI
    }
  });
};

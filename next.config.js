const withSass = require("@zeit/next-sass");
require("dotenv").config();

// "REACT_APP" variables are defined in .env file on local host (not commited); The others on Heroku

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
        process.env.REACT_APP_TWITTER_TOKEN_SECRET
    }
  });
};

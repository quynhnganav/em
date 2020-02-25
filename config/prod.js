// prod.js - production keys here!!
module.exports = {
  googleClientID: '359479149301-7i1kpdp7qsi3tpmbeijj0klei36t0pro.apps.googleusercontent.com',
  googleClientSecret: 'YMQcYSjjeBWLuuBhPRvLDWCw',
  mongoURI: 'mongodb+srv://dbqnga:Aloha@123@cluster0-gpl6o.mongodb.net/test?retryWrites=true&w=majority',
  cookieKey: process.env.COOKIE_KEY,
  stripePublishableKey: 'process.env.STRIPE_PUBLISHABLE_KEY',
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  sendGridKey: process.env.SEND_GRID_KEY,
  redirectDomain: process.env.REDIRECT_DOMAIN
};

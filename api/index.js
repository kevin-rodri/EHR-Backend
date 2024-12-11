const app = require('../app');

// Vercel serverless function export
module.exports = (req, res) => {
  app(req, res);
};

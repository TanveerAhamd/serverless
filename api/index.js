const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Dummy Route
app.get('/', (req, res) => {
  res.send('Hello from Express on Vercel!');
});

// Another route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello API from Vercel Function' });
});

// Export handler
module.exports = app;
module.exports.handler = (req, res) => {
  app(req, res);
};

const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

// Middleware
app.use(express.json());

// Routes
router.get('/', (req, res) => {
  res.send('Hello from Express on Vercel!');
});

router.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello API from Vercel Function' });
});

// Mount router
app.use('/', router);

// Export as a serverless function
module.exports.handler = serverless(app);

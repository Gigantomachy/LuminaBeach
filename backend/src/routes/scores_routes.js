const express = require('express');
const router = express.Router();

// POST /api/scores - Submit a score (requires auth)
router.post('/', async (req, res) => {
  res.json({ message: 'Submit score endpoint - coming soon' });
});

// GET /api/scores/me - Get current user's personal best
router.get('/me', async (req, res) => {
  res.json({ message: 'Get personal best endpoint - coming soon' });
});

module.exports = router;
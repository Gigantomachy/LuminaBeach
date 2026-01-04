const express = require('express');
const router = express.Router();

// GET /api/leaderboard - Get global top scores
router.get('/', async (req, res) => {
  const limit = parseInt(req.query.limit) || 10;
  res.json({ 
    message: 'Leaderboard endpoint - coming soon',
    limit 
  });
});

module.exports = router;
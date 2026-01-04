const express = require('express');
const router = express.Router();

// GET /api/users/me - Get user profile & stats
router.get('/me', async (req, res) => {
  res.json({ message: 'Get user profile endpoint - coming soon' });
});

module.exports = router;
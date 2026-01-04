const express = require('express');
const router = express.Router();

// POST /api/auth/register
router.post('/register', async (req, res) => {
  res.json({ message: 'Register endpoint - coming soon' });
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  res.json({ message: 'Login endpoint - coming soon' });
});

// POST /api/auth/google
router.post('/google', async (req, res) => {
  res.json({ message: 'Google OAuth endpoint - coming soon' });
});

// POST /api/auth/logout
router.post('/logout', async (req, res) => {
  res.json({ message: 'Logout endpoint - coming soon' });
});

// GET /api/auth/me
router.get('/me', async (req, res) => {
  res.json({ message: 'Get current user endpoint - coming soon' });
});

module.exports = router;
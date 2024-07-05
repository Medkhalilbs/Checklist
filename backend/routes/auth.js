const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user._id, role: user.role }, 'secret', {
    expiresIn: '1h',
  });

  res.json({ token });
});

router.post('/register', async (req, res) => {
  const { username, password, role } = req.body;
  const user = new User({ username, password, role });

  await user.save();
  res.status(201).json({ message: 'User created' });
});

module.exports = router;

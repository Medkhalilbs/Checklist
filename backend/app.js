// app.js
const express = require('express');
const app = express();
const cors = require('cors');
const authRoutes = require('./routes/auth');
const checklistRoutes = require('./routes/checklist');
const { checkAuth } = require('./middleware/auth');

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/checklists', checkAuth, checklistRoutes);

module.exports = app; // Ensure this line exports the app instance

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

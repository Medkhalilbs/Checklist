const express = require('express');
const router = express.Router();
const Checklist = require('../models/Checklist');
const jwt = require('jsonwebtoken');
const { checkAdmin, checkAuth } = require('../middleware/auth');

router.use(checkAuth);

router.get('/', async (req, res) => {
  const checklists = await Checklist.find();
  res.json(checklists);
});

router.post('/', checkAdmin, async (req, res) => {
  const { type, version, tasks } = req.body;
  const checklist = new Checklist({ type, version, tasks });

  await checklist.save();
  res.status(201).json(checklist);
});

router.put('/:id', checkAdmin, async (req, res) => {
  const { id } = req.params;
  const { type, version, tasks } = req.body;

  const checklist = await Checklist.findByIdAndUpdate(
    id,
    { type, version, tasks },
    { new: true }
  );

  res.json(checklist);
});

router.delete('/:id', checkAdmin, async (req, res) => {
  await Checklist.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;

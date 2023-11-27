const express = require('express');
const notesRouter = express.Router();
const notesController = require('../controllers/notes.controller');

notesRouter.get('/', notesController.getNotes);
notesRouter.post('/', notesController.addNote);
notesRouter.delete('/:id', notesController.deleteNote);

module.exports = notesRouter;

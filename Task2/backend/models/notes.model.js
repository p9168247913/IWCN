const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true
    }
);

const NoteModel = mongoose.model('Note', noteSchema);

module.exports = NoteModel;

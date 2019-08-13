var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// unique true for user to save.

var noteSchema = new Schema({
    _headlineId: {
        type: Schema.Types.ObjectId,
        ref: "Headline"
    },
    date: String,
    noteText: String,
});

var Note = mongoose.model("Note", noteSchema);

module.exports = Note;
const mongoose = require('mongoose');
const mongooseValidator = require("mongoose-unique-validator");
TaskSchema = new mongoose.Schema({
    section: {
        type: String,
        required: [true, "Please Enter Title"],
        trim: true
    },
    task: {
        type: String,
        required: [true, 'Please Enter Task'],
        trim: true
    },
    status: {
        type: String
    },
    stared: {
        type: Date,
        default: Date.now()
    },
    endDate: {
        type: Date
    },
    developer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

});
TaskSchema.plugin(mongooseValidator);
module.exports = mongoose.model('Task', TaskSchema)
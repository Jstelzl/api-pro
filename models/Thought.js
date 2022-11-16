const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema(
    {
        userName: {
            type: String,
            required: 'Must have a username!'
        },
        thoughtText: {
            type: String,
            trim: true,
            require: 'thought text must exist!',
            minlength: 1,
            maxlength: 280
        },
        reactions: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Reaction'
            }
        ],
        createdAt: {
            type: Date,
            default: Date.now
        }
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

reactionCount.virtuals('reactionAmount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
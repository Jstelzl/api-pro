const { Schema, model, Types } = require('mongoose');

const dateFormat = require('../utils/dateFormat');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: new Types.ObjectId
        },
        reactionBody: {
            type: String,
            required: 'Must have content!',
            maxlength: 280
        },
        username: {
            type: String,
            required: 'Must have a username!'
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
    },
    {
        toJSON: {
          getters: true
        }
    }

);

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
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        // reactionSchema to validate data for a reply
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    },
);

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
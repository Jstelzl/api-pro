const { Schema } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: new ObjectId
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
            // Use a getter method to format the timestamp on query
        }
    }
);
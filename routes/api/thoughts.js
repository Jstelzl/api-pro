const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createNewThought,
    createReaction,
    updateThought,
    deleteThought,
    deleteReaction
} = require('../../controllers/thoughts-controllers');

// api/thoughts
router
    .route('/')
    .get(getAllThoughts)
    .get(getThoughtById)
    .post(createNewThought)
    .put(updateThought)
    .delete(deleteThought)

// api/thoughts/:thoughtId/reactions
router
    .route('/:thoughtsId/reactions')
    .post(createReaction)
    .delete(deleteReaction)

    
module.exports = router;
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
router.route('/').get(getAllThoughts).post(createNewThought);

router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);
// api/thoughts/:thoughtId/reactions
router.route('/:thoughtsId/reactions').post(createReaction).delete(deleteReaction);

    
module.exports = router;
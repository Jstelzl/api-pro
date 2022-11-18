const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createNewUser,
    updateUserById,
    deleteUserById
} = require('../../controllers/user-controllers');

// api/users
router.route('/').get(getAllUsers).post(createNewUser);

router.route('/:id').get(getUserById).put(updateUserById).delete(deleteUserById);
module.exports = router;
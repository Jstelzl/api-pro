const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createNewUser,
    updateUserById,
    deleteUserById,
    createNewFriend,
    deleteFriend

} = require('../../controllers/user-controllers');

// api/users
router.route('/').get(getAllUsers).post(createNewUser);

// api/users/userId
router.route('/:id').get(getUserById).put(updateUserById).delete(deleteUserById);

// api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(createNewFriend).delete(deleteFriend);

module.exports = router;
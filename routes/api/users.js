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

// api/users/:userId/friends
router.route('/:userId/friends/:userId').post(createNewFriend);

// api/users/:userId/friends/:fiendsId
router.route('/:userId/friends/:friendId').delete(deleteFriend);

module.exports = router;
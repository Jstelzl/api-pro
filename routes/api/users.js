const router = require('express').Router();

const {
    allUsers,
    userById,
    newUser,
    updateUserById,
    deleteUserById
} = require('../../controllers/user-controllers');

// api/users
router
    .route('/')
    .get(allUsers)
    .get(userById)
    .post(newUser)
    .put(updateUserById)
    .delete(deleteUserById)

module.exports = router;
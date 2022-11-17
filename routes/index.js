const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.post("/test",( req, res) => {
    res.status(200).send('TESTING');
});

router.use((req, res) => {
    res.status(404).send('<h1>😝 404 Error!</h1>');
});

module.exports = router;

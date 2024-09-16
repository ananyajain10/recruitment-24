const router = require('express').Router();
const usercol = require('../controllers/userController');


router.get("/response", usercol.userRegRes);

module.exports = router;
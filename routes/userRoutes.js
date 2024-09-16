const router = require('express').Router();
const usercol = require('../controllers/userController');

router.post("/register", usercol.userReg);

module.exports = router;
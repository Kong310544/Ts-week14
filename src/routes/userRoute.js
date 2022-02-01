const express = require ('express')
const router = express.Router();
const uerController = require('../controllers/useController');

router.post("/register",uerController.register);
router.post("/login",uerController.login);

module.exports = router;
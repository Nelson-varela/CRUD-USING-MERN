const { Router } = require('express');
const router = Router();


const {signin, signup} = require('../controllers/users.controllers');

router.route('/')
      .post(signin)
      .post(signup);

module.exports = router;


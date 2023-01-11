const express = require('express');
const CompilerController = require('../controllers/compiler');


const router = express.Router();

router.get('/' , function (req , res ) {
	return res.render('home');
});


router.post('/compile', CompilerController.compileCode);

module.exports = router;
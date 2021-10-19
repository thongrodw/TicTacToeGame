var express = require('express');
var router = express.Router();
const controller = require('../controllers/game24Control')

/* GET place test */
router.get('/test', controller.testRoute)

/* GET Game24 */
router.post('/game24', controller.theGame24)

/* GET Game XO */
router.get('/xo',controller.theXoGame)

module.exports = router;
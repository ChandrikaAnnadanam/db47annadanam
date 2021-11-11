var express = require('express');
const Eagle_controlers= require('../controllers/Eagle');
var router = express.Router();
/* GET Eagles */
router.get('/', Eagle_controlers.Eagle_view_all_Page );
module.exports = router;
var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Eagle_controller = require('../controllers/Eagle');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Eagle ROUTES ///
// POST request for creating a Eagle.
router.post('/Eagle', Eagle_controller.Eagle_create_post);
// DELETE request to delete Eagle.
router.delete('/Eagle/:id', Eagle_controller.Eagle_delete);
// PUT request to update Eagle.
router.put('/Eagle/:id',
Eagle_controller.Eagle_update_put);
// GET request for one Eagle.
router.get('/Eagle/:id', Eagle_controller.Eagle_detail);
// GET request for list of all Eagle items.
router.get('/Eagle', Eagle_controller.Eagle_list);
module.exports = router;

const router = require('express').Router();
const loader = require('../loader');
const controllers = require('../controllers');

loader.load_files(router)
router.get('/', controllers.info_api)

module.exports = router;
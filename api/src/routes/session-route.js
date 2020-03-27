const session_controller = require('../controllers/session-controller');
module.exports = router => {
    router.post('/sessions', session_controller.create);
}
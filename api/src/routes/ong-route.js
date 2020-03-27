const ong_controller = require('../controllers/ong-controller');
module.exports = router => {
    router.post('/ongs', ong_controller.create)
    router.get('/ongs', ong_controller.find_all)
}

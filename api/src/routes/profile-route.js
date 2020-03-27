const profile_controller = require('../controllers/profile-controller');
module.exports = router => {
    router.get('/profile', profile_controller.find_all)
}
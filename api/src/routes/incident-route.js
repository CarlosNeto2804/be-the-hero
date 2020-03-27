const incident_controller = require('../controllers/incident-controller');
module.exports =  router => {
    router.post('/incidents', incident_controller.create)
    router.get('/incidents', incident_controller.find_all)
    router.delete('/incidents/:id', incident_controller.delete)
}


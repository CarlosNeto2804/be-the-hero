const db_connetion = require('../database');
module.exports = {
    create: async (request, response) => {
        const { id } = request.body;
        const ong = await db_connetion('ongs').where('id', id).select('name').first()
        if(!ong){
            return response.status(400).send({error: "No ONG found this ID"})
        }
        return response.send(ong)
    },
}
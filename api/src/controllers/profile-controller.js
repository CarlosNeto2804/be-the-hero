const db_connetion = require('../database');
module.exports = {
    find_all: async (request, response)=>{
        const ong_id = request.headers.authorization;
        const incidents = await db_connetion('incidents')
        .where('ong_id', ong_id).select('*');
        return response.send(incidents);
    },
}
const crypto = require('crypto');
const db_connetion = require('../database');
module.exports = {
    find_all: async (_, response)=>{
        const ongs = await db_connetion('ongs').select('*');
        return response.send(ongs);
    },
    create: async (request, response) => {
        const { name, email, whatsapp, city, uf } = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
        await db_connetion('ongs').insert({id, name, email, whatsapp, city, uf});
        return response.send({id});
    }
}
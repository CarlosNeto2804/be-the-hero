const db_connetion = require('../database');
module.exports = {
    create: async (request, response) => {
        const { title, description, value } = request.body
        const ong_id = request.headers.authorization;
        const [id] =  await db_connetion('incidents').insert(
            { title, description, value, ong_id });
        return response.send({id});
    },
    find_all: async (request, response)=>{
        const {page = 1, per_page = 5} = request.query;
        const off_set = (page-1)*per_page;
        const [count] = await db_connetion('incidents').count();
        const incidents = await db_connetion('incidents')
        .join('ongs', 'ongs.id', '=', "incidents.ong_id")        
        .limit(per_page)
        .offset(off_set)
        .select([
            'incidents.*', 
            'ongs.name', 
            'ongs.email', 
            'ongs.whatsapp',
            'ongs.city',
            'ongs.uf'
        ]);
        const response_formatted = {
            page,
            per_page,
            total_items:count["count(*)"],
            incidents
        }
        response.header('X-Total-Count',count["count(*)"])
        return response.send(response_formatted);
    },
    delete: async (request, response)=>{
        const { id } = request.params;
        const ong_id = request.headers.authorization;
        const incident = await db_connetion('incidents')
        .where('id',id).select('ong_id').first();
        if(!incident) return response.status(200).send({message:`Item ${id} deleted`})
        if(incident.ong_id != ong_id){
            return response.status(401).send({error: "Operation not permitted!"})
        }
        await db_connetion('incidents').where('id',id).delete();
        return response.status(200).send({message:`Item ${id} deleted`})
    }
}
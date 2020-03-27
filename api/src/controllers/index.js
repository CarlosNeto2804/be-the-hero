module.exports = {
    info_api: (_, response) => {
        return response.send({
            app: 'Backend Semana OmniStack',
            version: 'v11.0',
            author: {
                name:'Carlos Alberto Neto',
                email:'carloshtcursos@gai.com'
            }
        })
    }
}
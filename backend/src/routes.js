const express = require('express');
const connection = require('./database/connection');

const SessionController = require('./controllers/SessionController');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');

const routes = express.Router();

routes.get('/users', (request, response) => {
    return response.json({
        event: 'Semana OmniStack 11.0',
        aluno: 'Diego Fernandes'
    })
})

routes.post('/sessions', SessionController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.destroy);

routes.get('/ongs', OngController.index );
routes.post('/ongs', OngController.create);

module.exports = routes;
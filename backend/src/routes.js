const express = require('express');
const routes = express.Router();

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


routes.post('/session', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/casos', IncidentController.index);
routes.post('/casos', IncidentController.create);
routes.delete('/casos/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;
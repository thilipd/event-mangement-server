const express = require('express');

const eventController = require('../controller/eventController');

const eventRoute = express.Router();


eventRoute.post('/create', eventController.create);
eventRoute.get('/list', eventController.list);
eventRoute.get('/read/:id', eventController.read);
eventRoute.put('/edit/:id', eventController.update);
eventRoute.delete('/delete/:id', eventController.delete);


module.exports = eventRoute;
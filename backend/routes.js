const {Router} = require('express')
const routes = Router()
const DevCtrl = require('./controllers/Dev')
const SearchCtrl = require('./controllers/Search')

routes.get('/devs/',DevCtrl.index)
routes.post('/devs',DevCtrl.store)

routes.post('/search',SearchCtrl.index)

module.exports = routes
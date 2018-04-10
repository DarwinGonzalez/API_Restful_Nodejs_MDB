import itemController from '../app/controllers/itemController'
import express        from 'express'

const api = express.Router()

api.get('/item', itemController.main)
api.post('/item', itemController.getItem)




module.exports = api
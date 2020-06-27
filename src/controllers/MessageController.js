const Message = require('../models/Message')

module.exports = {

    async index(req, res) {
        const msg = await Message.findAll()

        return res.json(msg)
    },

    async store(req, res){

        const { origin, destiny, message } = req.body

        //const msg = await Message.create({ origin: origin, destiny: destiny, message: message })
        const msg = await Message.create({ origin, destiny, message })

        return res.json(msg)
        
    }
}
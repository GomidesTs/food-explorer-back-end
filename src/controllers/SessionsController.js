const SessionsRepository = require('../repositories/SessionsRepository')
const SessionsService = require('../services/SessionsService')

class SessionsController {
    async create(request, response) {
        const { email, password } = request.body

        const sessionsRepository = new SessionsRepository()
        const sessionsService = new SessionsService(sessionsRepository)

        const token = await sessionsService.create({ email, password })

        response.status(200).json(token)
    }
}
module.exports = SessionsController
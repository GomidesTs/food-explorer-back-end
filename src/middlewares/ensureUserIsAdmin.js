const AppError = require('../utils/AppError')
const UsersRepository = require('../repositories/UsersRepository')

async function ensureUserIsAdmin(request, response, next) {
    const user_id = request.user.id

    const usersRepository = new UsersRepository()

    const checkUserIsAdmin = await usersRepository.show({ id: user_id })

    if (!checkUserIsAdmin.isAdmin) {
        throw new AppError('Usuário não autorizado para realizar estação', 401)
    }

    next()
}

module.exports = ensureUserIsAdmin
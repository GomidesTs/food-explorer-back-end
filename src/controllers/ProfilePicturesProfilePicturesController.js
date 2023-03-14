const ProfilePicturesRepository = require('../repositories/ProfilePicturesRepository')
const ProfilePicturesService = require('../services/ProfilePicturesService')

class ProfilePicturesController {
    async update(request, response) {
        const user_id = request.user.id
        const picture = request.file.filename

        const profilePicturesRepository = new ProfilePicturesRepository()
        const profilePicturesService = new ProfilePicturesService(profilePicturesRepository)

        await profilePicturesService.update({ id: user_id, picture })

        response.status(200).json()
    }
}

module.exports = ProfilePicturesController
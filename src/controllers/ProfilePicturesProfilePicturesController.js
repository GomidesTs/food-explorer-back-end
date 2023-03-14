const ProfilePicturesRepository = require('../repositories/ProfilePicturesRepository')
const ProfilePicturesService = require('../services/ProfilePicturesService')

class ProfilePicturesController {
    async update(request, response) {
        const { id } = request.query
        const picture = request.file.filename

        const profilePicturesRepository = new ProfilePicturesRepository()
        const profilePicturesService = new ProfilePicturesService(profilePicturesRepository)

        await profilePicturesService.update({ id, picture })

        response.status(200).json()
    }
}

module.exports = ProfilePicturesController
const { Router } = require('express')
const multer = require('multer')

const uploadConfig = require('../configs/upload')
const UsersController = require('../controllers/UsersController')
const ProfilePicturesController = require('../controllers/ProfilePicturesProfilePicturesController')

const usersController = new UsersController()
const profilePicturesController = new ProfilePicturesController()

const upload = multer(uploadConfig.MULTER)

const usersRoutes = Router()

usersRoutes.post('/', usersController.create)
usersRoutes.put('/', usersController.update)
usersRoutes.patch('/avatar', upload.single('avatar'), profilePicturesController.update)

module.exports = usersRoutes
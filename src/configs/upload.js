const path = require('path')
const multer = require('multer')
const crypto = require('crypto')

const TMP_FOLDER = path.resolve(__dirname, '..', 'tpm')
const UPLOADS_FOLDER = path.resolve(TPM_FOLDER, 'uploads')

const BYTE_LENGTH = 16

const MULTER = {
    storage: multer.diskStorage({
        destination: TMP_FOLDER,
        filename: (request, file, callback) => {
            const fileHash = crypto.randomBytes(BYTE_LENGTH).toString('hex')
            const fileName = `${fileHash}-${file.originalname}`

            return callback(null, fileName)
        }
    })
}

module.exports = {
    TMP_FOLDER,
    UPLOADS_FOLDER,
    MULTER
}
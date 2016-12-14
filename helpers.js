let helpers = {}
let bcrypt = require('bcryptjs');

helpers.HASH = (req, res, next) => {
    // req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.CRYPTO_SECRET);
    next()
}

helpers.DECRYPT = (password) => {
    
}

module.exports = helpers
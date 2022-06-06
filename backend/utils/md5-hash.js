const crypto = require('crypto')

const getHash = (timestamp) => {
    const privateKey = process.env.MARVEL_API_SECRET
    const publicKey = process.env.MARVEL_API_PUBLIC
    const hashToEncrypt = timestamp + privateKey + publicKey
    const hash = crypto.createHash('md5').update(hashToEncrypt).digest("hex")
    return hash
}

module.exports = {
    getHash
}

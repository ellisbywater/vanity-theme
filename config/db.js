
const { DB_USER, DB_PASSWORD } = process.env

module.exports = {
    dev: {
        uri: `mongodb://${DB_USER}:${DB_PASSWORD}@ds215822.mlab.com:15822/vanity_dev`
    }
}
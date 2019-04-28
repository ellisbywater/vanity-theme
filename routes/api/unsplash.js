const router = require('express').Router()
const Unsplash = require('unsplash-js').default

const { UNSPLASH_ACCESS_KEY, UNSPLASH_SECRET_KEY } = process.env

const unsplash = new Unsplash({
    applicationId: UNSPLASH_ACCESS_KEY,
    secret: UNSPLASH_SECRET_KEY
})

router.get("/", (req, res) => {
        unsplash.search.photos("people", 10)
            .then(photos => res.json(photos))
})

module.exports = router
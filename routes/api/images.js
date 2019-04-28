const router = require('express').Router()
const fetch = require('node-fetch')
const axios = require('axios')
const Unsplash = require('unsplash-js').default
const toJson = require('unsplash-js').toJson
const dotenv = require('dotenv')
dotenv.config()

const { PIXABAY_KEY } = process.env

const people = 'people'

const pixabay_uri = `https://pixabay.com/api/?key=${PIXABAY_KEY}&q=people`


router.get("/", (req, res) => {
        let images
        axios.get(pixabay_uri)
            .then((response) => {
                console.log(response.data.hits)
                images = response.data
                res.json(images)
            })
            .catch(error => {
                console.log(error)
                res.json({error})
            })
        
})

module.exports = router
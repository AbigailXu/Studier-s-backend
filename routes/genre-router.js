const express = require('express')

const GenreCtrl = require('../controllers/genre-ctrl')

const router = express.Router()

router.post('/genre', GenreCtrl.createGenre)
router.put('/genre/:id', GenreCtrl.updateGenre)
router.delete('/genre/:id', GenreCtrl.deleteGenre)
router.get('/genre/:id', GenreCtrl.getGenreById)
router.get('/genres', GenreCtrl.getGenres)

module.exports = router;
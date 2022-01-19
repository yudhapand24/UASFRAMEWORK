const express = require('express')
const router = express.Router()
const mangacontroller = require('../controller/manga')


router.route('/manga')
    .get(mangacontroller.index)
    .post(mangacontroller.tambah)

router.put('/manga/:id', function(req, res) {
    const id = req.params.id
    manga.filter(mg => {
        if (mg.id == id) {
            mg.id = id
            mg.chmanga = req.body.chmanga
            mg.volmanga = req.body.volmanga

            return manga
        }
    })
    res.json(manga)
})
router.delete('/manga/:id', function(req, res) {
    const id = req.params
    res.send(id)
})
module.exports = router
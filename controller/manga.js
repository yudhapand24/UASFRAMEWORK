let manga = [
    { id: 01, chmanga: '1030', volmanga: 100 },
    { id: 02, chmanga: '1031', volmanga: 100 }
]

module.exports = {
    index: function(req, res) {
        if (manga.length > 0) {
            res.json({
                status: true,
                data: manga,
                method: req.method,
                URL: req.url,
                tanggal: new Date
            })
        } else {
            res.json({
                status: false,
                massage: 'DATA MANGA MASIH KOSONG'
            })
        }
    },
    tambah: function(re, res) {
        manga.push(req.body)
        res.send({
            status: true,
            data: manga,
            massage: 'DATA BUKU BERHASIL DITAMBAHKAN',
            method: req.method,
            url: req.url
        })
    }
}
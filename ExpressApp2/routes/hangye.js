var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/1', function (req, res) {
    var xinti = new Array
    console.log('wo')
    global.db.query(
        "SELECT * FROM gupiaotable WHERE hangye= '金融'",
        function S1(err, rows, fields) {
            if (err) throw err;
            console.log(rows)
            for(i=0;i<rows.length;i++){
                xinti.push(rows[i])
            }
            res.render('hangye', { title:'Express',xinti1:xinti});
        })
})
router.get('/2', function (req, res) {
    var xinti = new Array
    console.log('wo')
    global.db.query(
        "SELECT * FROM gupiaotable WHERE hangye= '地产'",
        function S1(err, rows, fields) {
            if (err) throw err;
            console.log(rows)
            for (i = 0; i < rows.length; i++) {
                xinti.push(rows[i])
            }
            res.render('hangye', { title: 'Express', xinti1: xinti });
        })
})
router.get('/3', function (req, res) {
    var xinti = new Array
    console.log('wo')
    global.db.query(
        "SELECT * FROM gupiaotable WHERE hangye= '新能源'",
        function S1(err, rows, fields) {
            if (err) throw err;
            console.log(rows)
            for (i = 0; i < rows.length; i++) {
                xinti.push(rows[i])
            }
            res.render('hangye', { title: 'Express', xinti1: xinti });
        })
})
router.get('/4', function (req, res) {
    var xinti = new Array
    console.log('wo')
    global.db.query(
        "SELECT * FROM gupiaotable WHERE hangye= '电子类'",
        function S1(err, rows, fields) {
            if (err) throw err;
            console.log(rows)
            for (i = 0; i < rows.length; i++) {
                xinti.push(rows[i])
            }
            res.render('hangye', { title: 'Express', xinti1: xinti });
        })
})
router.get('/5', function (req, res) {
    var xinti = new Array
    console.log('wo')
    global.db.query(
        "SELECT * FROM gupiaotable WHERE hangye= '软件'",
        function S1(err, rows, fields) {
            if (err) throw err;
            console.log(rows)
            for (i = 0; i < rows.length; i++) {
                xinti.push(rows[i])
            }
            res.render('hangye', { title: 'Express', xinti1: xinti });
        })
})
router.get('/6', function (req, res) {
    var xinti = new Array
    console.log('wo')
    global.db.query(
        "SELECT * FROM gupiaotable WHERE hangye= '钢铁'",
        function S1(err, rows, fields) {
            if (err) throw err;
            console.log(rows)
            for (i = 0; i < rows.length; i++) {
                xinti.push(rows[i])
            }
            res.render('hangye', { title: 'Express', xinti1: xinti });
        })
})
router.get('/7', function (req, res) {
    var xinti = new Array
    console.log('wo')
    global.db.query(
        "SELECT * FROM gupiaotable WHERE hangye= '电力'",
        function S1(err, rows, fields) {
            if (err) throw err;
            console.log(rows)
            for (i = 0; i < rows.length; i++) {
                xinti.push(rows[i])
            }
            res.render('hangye', { title: 'Express', xinti1: xinti });
        })
})
router.get('/8', function (req, res) {
    var xinti = new Array
    console.log('wo')
    global.db.query(
        "SELECT * FROM gupiaotable WHERE hangye= '其他'",
        function S1(err, rows, fields) {
            if (err) throw err;
            console.log(rows)
            for (i = 0; i < rows.length; i++) {
                xinti.push(rows[i])
            }
            res.render('hangye', { title: 'Express', xinti1: xinti });
        })
})
router.post('/1', function (req, res) {
    var bb = req.body.idd
    var tmp2 = req.session
    tmp2.text = bb
    res.redirect('/gupiao') 
})
router.post('/2', function (req, res) {
    var bb = req.body.idd
    var tmp2 = req.session
    tmp2.text = bb
    res.redirect('/gupiao') 
})
router.post('/3', function (req, res) {
    var bb = req.body.idd
    var tmp2 = req.session
    tmp2.text = bb
    res.redirect('/gupiao') 
})
router.post('/4', function (req, res) {
    var bb = req.body.idd
    var tmp2 = req.session
    tmp2.text = bb
    res.redirect('/gupiao') 
})
router.post('/5', function (req, res) {
    var bb = req.body.idd
    var tmp2 = req.session
    tmp2.text = bb
    res.redirect('/gupiao') 
})
router.post('/6', function (req, res) {
    var bb = req.body.idd
    var tmp2 = req.session
    tmp2.text = bb
    res.redirect('/gupiao') 
})
router.post('/7', function (req, res) {
    var bb = req.body.idd
    var tmp2 = req.session
    tmp2.text = bb
    res.redirect('/gupiao') 
})
router.post('/8', function (req, res) {
    var bb = req.body.idd
    var tmp2 = req.session
    tmp2.text = bb
    res.redirect('/gupiao') 
})
module.exports = router;
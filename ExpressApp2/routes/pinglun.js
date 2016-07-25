var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/1', function (req, res) {
    var xinti = new Array
    console.log('wo')
    global.db.query(
        "SELECT * FROM dongtaitable1 " 
        + "WHERE kind = '论坛1'",
        function S1(err, rows, fields) {
            if (err) throw err;
            console.log(rows)
            for(i=0;i<rows.length;i++){
                xinti.push(rows[i])
            }
            res.render('pinglun', { title:'Express',xinti1:xinti});
        })
})
router.get('/2', function (req, res) {
	var xinti= new Array	
    global.db.query(
        "SELECT * FROM dongtaitable1 " 
        + "WHERE kind = '论坛2'",
        function S1(err, rows, fields) {
            if (err) throw err;
            for(i=0;;i++){
            	if(typeof(rows[i]=="undefined"))break
            	xinti.push(rows[i])
            }
            res.render('pinglun', { title:'Express',xinti1:xinti});
        })
})
router.get('/3', function (req, res) {
	var xinti= new Array	
    global.db.query(
        "SELECT * FROM dongtaitable1 " 
        + "WHERE kind = '论坛3'",
        function S1(err, rows, fields) {
            if (err) throw err;
            for(i=0;;i++){
            	if(typeof(rows[i]=="undefined"))break
            	xinti.push(rows[i])
            }
            res.render('pinglun', { title:'Express',xinti1:xinti});
        })
})
router.get('/4', function (req, res) {
	var xinti= new Array	
    global.db.query(
        "SELECT * FROM dongtaitable1 " 
        + "WHERE kind = '论坛4'",
        function S1(err, rows, fields) {
            if (err) throw err;
            for(i=0;;i++){
            	if(typeof(rows[i]=="undefined"))break
            	xinti.push(rows[i])
            }
            res.render('pinglun', { title:'Express',xinti1:xinti});
        })
})
router.get('/5', function (req, res) {
	var xinti= new Array	
    global.db.query(
        "SELECT * FROM dongtaitable1 " 
        + "WHERE kind = '论坛5'",
        function S1(err, rows, fields) {
            if (err) throw err;
            for(i=0;;i++){
            	if(typeof(rows[i]=="undefined"))break
            	xinti.push(rows[i])
            }
            res.render('pinglun', { title:'Express',xinti1:xinti});
        })
})
router.get('/6', function (req, res) {
	var xinti= new Array	
    global.db.query(
        "SELECT * FROM dongtaitable1 " 
        + "WHERE kind = '论坛6'",
        function S1(err, rows, fields) {
            if (err) throw err;
            for(i=0;;i++){
            	if(typeof(rows[i]=="undefined"))break
            	xinti.push(rows[i])
            }
            res.render('pinglun', { title:'Express',xinti1:xinti});
        })
})
router.get('/7', function (req, res) {
	var xinti= new Array	
    global.db.query(
        "SELECT * FROM dongtaitable1 " 
        + "WHERE kind = '论坛7'",
        function S1(err, rows, fields) {
            if (err) throw err;
            for(i=0;;i++){
            	if(typeof(rows[i]=="undefined"))break
            	xinti.push(rows[i])
            }
            res.render('pinglun', { title:'Express',xinti1:xinti});
        })
})
router.post('/1', function (req, res) {
    var bb = req.body.idd
    var tmp2 = req.session
    tmp2.text = bb
    res.redirect('/dongtai') 
})
router.post('/2', function (req, res) {
    var bb = req.body.idd
    var tmp2 = req.session
    tmp2.text = bb
    res.redirect('/dongtai') 
})
router.post('/3', function (req, res) {
    var bb = req.body.idd
    var tmp2 = req.session
    tmp2.text = bb
    res.redirect('/dongtai') 
})
router.post('/4', function (req, res) {
    var bb = req.body.idd
    var tmp2 = req.session
    tmp2.text = bb
    res.redirect('/dongtai') 
})
router.post('/5', function (req, res) {
    var bb = req.body.idd
    var tmp2 = req.session
    tmp2.text = bb
    res.redirect('/dongtai') 
})
router.post('/6', function (req, res) {
    var bb = req.body.idd
    var tmp2 = req.session
    tmp2.text = bb
    res.redirect('/dongtai') 
})
router.post('/7', function (req, res) {
    var bb = req.body.idd
    var tmp2 = req.session
    tmp2.text = bb
    res.redirect('/dongtai') 
})
router.post('/8', function (req, res) {
    var bb = req.body.idd
    var tmp2 = req.session
    tmp2.text = bb
    res.redirect('/dongtai') 
})
module.exports = router;
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/1', function (req, res) {
	var xinti= new Array	
    global.db.query(
        "SELECT * FROM zhishutable1 " 
        + "WHERE zhishuname = '上证指数'",
        function S1(err, rows, fields) {
            if (err) throw err;
            xinti.push(rows[0])
            res.render('zhishu', { title:'Express',xinti1:xinti});
        })
});
router.post('/',function (req, res) {
	var aa = req.body.tmper
    res.write("<?xml version=\"1.0\" ?>")
    global.db.query(
        "SELECT historynum, DATE_FORMAT(historytime,'%m/%d/%Y') AS t FROM lishitable1 WHERE historyevent=? ORDER BY historytime DESC", [aa],
    function S2(err, rows, fields) {
            if (err) throw err;
            res.write("<dateback>")
            for (var i = 0; i < 5; i++) {
                if (typeof (rows[i]) != "undefined") {
                    var give1 = "<data" + (i + 1) + ">" + rows[i].historynum + "</data" + (i + 1) + ">"
                    var give2 = "<time" + (i + 1) + ">" + rows[i].t + "</time" + (i + 1) + ">"
                    res.write(give1)
                    console.log(rows[i].t)
                    res.write(give2)
                }
            }
            res.write("</dateback>")
            res.end()
        })
})
router.get('/2', function (req, res) {
	var xinti= new Array	
    global.db.query(
        "SELECT * FROM zhishutable1 " 
        + "WHERE zhishuname = '深证指数'",
        function S1(err, rows, fields) {
            if (err) throw err;
            xinti.push(rows[0])
            res.render('zhishu', { title:'Express',xinti1:xinti});
        })
});
router.get('/3', function (req, res) {
	var xinti= new Array	
    global.db.query(
        "SELECT * FROM zhishutable1 " 
        + "WHERE zhishuname = '恒生港股'",
        function S1(err, rows, fields) {
            if (err) throw err;
            xinti.push(rows[0])
            res.render('zhishu', { title:'Express',xinti1:xinti});
        })
});
router.get('/4', function (req, res) {
	var xinti= new Array	
    global.db.query(
        "SELECT * FROM zhishutable1 " 
        + "WHERE zhishuname = '纳斯达克'",
        function S1(err, rows, fields) {
            if (err) throw err;
            xinti.push(rows[0])
            res.render('zhishu', { title:'Express',xinti1:xinti});
        })
});
router.get('/5', function (req, res) {
	var xinti= new Array	
    global.db.query(
        "SELECT * FROM zhishutable1 " 
        + "WHERE zhishuname = '红筹股指'",
        function S1(err, rows, fields) {
            if (err) throw err;
            xinti.push(rows[0])
            res.render('zhishu', { title:'Express',xinti1:xinti});
        })
});
router.get('/6', function (req, res) {
	var xinti= new Array	
    global.db.query(
        "SELECT * FROM zhishutable1 " 
        + "WHERE zhishuname = '国企股指'",
        function S1(err, rows, fields) {
            if (err) throw err;
            xinti.push(rows[0])
            res.render('zhishu', { title:'Express',xinti1:xinti});
        })
});
module.exports = router;
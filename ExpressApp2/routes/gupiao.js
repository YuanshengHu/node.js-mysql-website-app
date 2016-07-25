var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res) {
    if(typeof(req.session.text)=="undefined"){
        res.redirect('/')
    }
    console.log(req.session.text)
    var xinti = new Array;
    var jilu = new Array;
    var dongtais = new Array
    var caibaos = new Array
    global.db.query(
        "SELECT * FROM gupiaotable " 
        + "WHERE stockname = ?",[req.session.text],
        function S1(err, rows, fields) {
            if (err) throw err;
            console.log('search2 fuck');
            xinti.push(rows[0])
            global.db.query(
                "SELECT * FROM lishitable1 WHERE historyevent=? ORDER BY historytime DESC",[req.session.text],
                function S2(err, rows1, fields){
                    if (err) throw err;
                    console.log('search2.5 fuck');
                    for(var i = 0;i<8;i++){
                        if(typeof(rows1[i])!="undefined"){
                            jilu.push(rows1[i])
                        }
                        console.log(jilu.length)
                    }
                        global.db.query(
                        "SELECT * FROM dongtaitable1 WHERE stock = ? ORDER BY date DESC", [req.session.text],
                        function S3(err, rows2, fields) {
                            if (err) throw err;
                            console.log('search3 fuck');
                            for (var i = 0; i < 5; i++) {
                                if (typeof (rows2[i]) != "undefined") {
                                    dongtais.push(rows2[i]);
                                }
                            }
                            global.db.query(
                                "SELECT * FROM caibaotable1 WHERE stockname = ?", [req.session.text],
                                function S4(err, rows3, fields) {
                                    if (err) throw err;
                                    console.log('search4 fuck');
                                    for (var i = 0; i < 5; i++) {
                                        if (typeof (rows3[i]) != "undefined") {
                                            caibaos.push(rows3[i]);
                                        }
                                    }
                                    res.render('gupiao', { title: 'Express' , dongtais: dongtais , xinti1: xinti, jilu: jilu,caibaos:caibaos});
                                    req.session.destroy()

                                }

                            )
                        }

                    )          
                }
            );
        }
    );                                          
});
router.post('/', function (req, res) {                  
    if (typeof (req.body.tmper) != "undefined") {
        var aa = req.body.tmper
        res.write("<?xml version=\"1.0\" ?>")
        global.db.query(
            "SELECT historynum, DATE_FORMAT(historytime,'%m/%d/%Y') AS t FROM lishitable1 WHERE historyevent=? ORDER BY historytime DESC", [aa],
        function S1(err, rows, fields) {
                if (err) throw err;
                console.log('add fuck');
                res.write("<dateback>")
                for (var i = 0; i < 5; i++) {
                    if (typeof (rows[i]) != "undefined") {
                        var give1 = "<data" + (i + 1) + ">" + rows[i].historynum + "</data" + (i + 1) + ">"
                        var give2 = "<time" + (i + 1) + ">" + rows[i].t + "</time" + (i + 1) + ">"
                        res.write(give1)
                        res.write(give2)
                        console.log(rows[i].historynum)
                        console.log(rows[i].t)
                    }
                }
                res.write("</dateback>")
                res.end()
            })
    }
    else{
        var bb = req.body.idd
        var tmp2 = req.session
        tmp2.text = bb
        res.redirect('/dongtai')
    }
});
module.exports = router;
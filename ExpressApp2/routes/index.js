var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    var dongtais = new Array;
    global.db.query(
        "SELECT * FROM dongtaitable1 " 
        + "ORDER BY date DESC",
        function S0(err, rows1, fields) {
            if (err) throw err;
            console.log('动态部分获取成功');
            for (var i = 0; i < 5&& typeof(rows1[i])!="undefined"; i++) {
                dongtais.push(rows1[i]);
            }
            var zhangdiebangrate = new Array
            var dongtais1 = dongtais
            global.db.query(
                "SELECT * FROM gupiaotable " 
                + "ORDER BY updown DESC",
                function S1(err, rows2, fields) {
                    if (err) throw err;
                    console.log('涨跌榜部分获取成功');
                    for (var i = 0; i < rows2.length; i++) {
                        zhangdiebangrate.push(rows2[i]);
                    }
                    var zhangdiefurate = new Array
                    global.db.query(
                        "SELECT * FROM gupiaotable " 
                        + "ORDER BY updownrate DESC",
                        function S2(err, rows3, fields) {
                            if (err) throw err;
                            console.log('涨跌幅部分获取成功');
                            for (var i = 0; i < rows3.length; i++) {
                                zhangdiefurate.push(rows3[i]);
                            }
                            var chengjiaoliangrate = new Array
                            global.db.query(
                                "SELECT * FROM gupiaotable " 
                                + "ORDER BY chengjiaoliang DESC",
                                function S3(err, rows4, fields) {
                                    if (err) throw err;
                                    console.log('成交量部分获取成功');
                                    for (var i = 0; i < rows4.length; i++) {
                                        chengjiaoliangrate.push(rows4[i]);
                                    }
                                    var chengjiaoerate = new Array
                                    global.db.query(
                                        "SELECT * FROM gupiaotable " 
                                        + "ORDER BY chengjiaoe DESC",
                                        function S4(err, rows5, fields) {
                                            if (err) throw err;
                                            console.log('成交额部分获取成功');
                                            for (var i = 0; i < rows5.length; i++) {
                                                chengjiaoerate.push(rows5[i]);
                                            }
                                            var hangyepingjunrate = new Array
                                            global.db.query(
                                                "SELECT hangye, AVG(price) AS hangyepingjun FROM gupiaotable GROUP BY hangye ORDER BY AVG(price) DESC",
                                                function S5(err, rows6, fields) {
                                                    if (err) throw err;
                                                    console.log('行业关注部分获取成功');
                                                    for (var i = 0; i < rows6.length; i++) {
                                                        hangyepingjunrate.push(rows6[i]);
                                                    }
                                                    var gudongguanzhurate = new Array
                                                    global.db.query(
                                                        "SELECT hangye, COUNT(company) AS gudongshu FROM gupiaotable NATURAL JOIN caibaotable1 WHERE kind = 'holder' GROUP BY hangye ORDER BY gudongshu DESC",
                                                        function S6(err, rows7, fields) {
                                                            if (err) throw err;
                                                            console.log('行业关注部分获取成功');
                                                            for (var i = 0; i < rows7.length; i++) {
                                                                gudongguanzhurate.push(rows7[i]);
                                                            }
                                                            res.render('index', { title: 'Express' , dongtais: dongtais, zhangdiebangrate: zhangdiebangrate, zhangdiefurate: zhangdiefurate, chengjiaoliangrate: chengjiaoliangrate, chengjiaoerate: chengjiaoerate, hangyepingjunrate: hangyepingjunrate, gudongguanzhurate: gudongguanzhurate });
                                                        })
                                                })
                                        })
                                })
                        })
                })
        })
})
router.post('/', function (req, res) {                  //卧槽我写的是什么玩意儿
    if(typeof (req.body.fuck) != "undefined"){    
        var search = req.body.fuck
        var tmp = req.session
        tmp.text = search
        res.redirect('/gupiao');
    }
    else if (typeof (req.body.tmper) != "undefined"){
        var aa = req.body.tmper
        console.log(aa)
        res.write("<?xml version=\"1.0\" ?>")
        global.db.query(
        "SELECT * FROM dongtaitable1 "
        + "ORDER BY date DESC",
        function S1(err, rows, fields){
            if (err) throw err;
            console.log('add fuck');
            res.write("<dateback>")
            console.log(rows[4].name)
            console.log(rows.length)
            for(var i=0; i<5; i++) {
                console.log(aa)
                var mmm=Number(aa)+Number(i)
                console.log(mmm)
                if(mmm<rows.length){
                    console.log("kk")
                    var give0 = "<tag" + i + ">" + 1 + "</tag" + i + ">"
                    var give1 ="<img"+i+">"+rows[Number(aa) + Number(i)].img+"</img"+i+">"
                    var give2 ="<name"+i+">"+rows[Number(aa) + Number(i)].name+"</name"+i+">"
                    var give3="<date"+i+">"+rows[Number(aa) + Number(i)].date+"</date"+i+">"
                    res.write(give0)
                    res.write(give1)
                    res.write(give2)
                    res.write(give3)
                    console.log(i)                                      
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
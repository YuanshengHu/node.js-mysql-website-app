var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    console.log("ya")
    res.render('input', { title: 'Express'});
});

router.post('/', function (req, res) {
    if (typeof (req.body.zhishuname) != "undefined") {
        var zhishuzhibiao = parseFloat(req.body.zhishuzhibiao)
        var zhishuriqi = new Date(Date.parse(req.body.zhishuriqi.replace(/-/g,"/")))
        global.db.query(
            "SELECT * FROM zhishutable1 " 
            + "WHERE zhishuname= ?",[req.body.zhishuname],
            function S3(err, rows, fields) {
                if (err) throw err;
                console.log('管理员尝试插入指数表');
                if(rows.length==0){
                    global.db.query(
                   "INSERT INTO zhishutable1(zhishuname,num,time)" 
                   + "VALUES(?,?,?)",[req.body.zhishuname,zhishuzhibiao, zhishuriqi],
                    function (err) {
                            if (err) throw err;
                            console.log("管理员直接插入指数表");
                       }
                    );
                }
                else{
                    var cur = new Date()
                    global.db.query(
                   "INSERT INTO lishitable1(time,historytime,historyevent,historynum)" 
                   + "VALUES(?,?,?,?)",[cur,rows[0].time,rows[0].zhishuname,rows[0].num],
                    function (err) {
                            if (err) throw err;
                            console.log("管理员从指数表转换到历史表");
                       }
                    );
                    global.db.query(
                    "UPDATE zhishutable1 SET num=?, time=? WHERE zhishuname = ?",
                   [zhishuzhibiao, zhishuriqi,req.body.zhishuname],
                    function (err) {
                            if (err) throw err;
                            console.log("管理员更新指数表");
                       }
                    );
                }
            }
        )    
    }
    if (typeof (req.body.gupiaoname) != "undefined") {
        var gujia = parseFloat(req.body.gujia)
        var gupiaoshijian = new Date(Date.parse(req.body.gupiaoshijian.replace(/-/g,"/")))
        var chengjiaoliang = parseInt(req.body.chengjiaoliang)
        var chengjiaoe = parseInt(req.body.chengjiaoe)
        var hpass = parseInt(req.body.hpass)
        var lpass = parseInt(req.body.lpass)
        var updown = parseFloat(req.body.updown)
        var updownrate = parseFloat(req.body.updownrate)
        var jiaoyiliang = parseInt(req.body.jiaoyiliang)
        global.db.query(
            "SELECT * FROM gupiaotable " 
            + "WHERE code= ?",[req.body.gupiaodaima],
            function S3(err, rows, fields) {
                if (err) throw err;
                console.log('管理员尝试插入股票表');
                if(rows.length==0){
                    global.db.query(
                   "INSERT INTO gupiaotable(stockname,price,time,code,chengjiaoliang,chengjiaoe,hpass,lpass,updown,updownrate,amount,hangye)" 
                   + "VALUES(?,?,?,?,?,?,?,?,?,?,?,?)",
                   [req.body.gupiaoname,gujia,gupiaoshijian,req.body.gupiaodaima,chengjiaoliang,chengjiaoe,hpass,lpass,updown,updownrate,jiaoyiliang,req.body.gupiaohangye],
                    function (err) {
                            if (err) throw err;
                            console.log("管理员直接插入股票表");
                       }
                    );
                }
                else{
                    var cur = new Date()
                    global.db.query(
                   "INSERT INTO lishitable1(time,historytime,historyevent,historynum)" 
                   + "VALUES(?,?,?,?)",[cur,rows[0].time,rows[0].code,rows[0].gujia],
                    function (err) {
                            if (err) throw err;
                            console.log("管理员从股票表转换到历史表");
                       }
                    );
                    global.db.query(
                    "UPDATE gupiaotable SET price=?, time=?,chengjiaoliang=?,chengjiaoe=?,hpass=?,lpass=?,updown=?,updownrate=?,amount=? WHERE code = ?",
                    [gujia,gupiaoshijian,chengjiaoliang,chengjiaoe,hpass,lpass,updown,updownrate,jiaoyiliang,req.body.gupiaodaima],
                    function (err) {
                            if (err) throw err;
                            console.log("管理员更新股票表");
                       }
                    );
                }
            }
        )    
    }
    if (typeof (req.body.lishishuzhi) != "undefined") {
        var cur1 = new Date()
        var lishishuzhi = parseInt(req.body.lishishuzhi)
        var lishitime = new Date(Date.parse(req.body.lishitime.replace(/-/g,"/")))
        global.db.query(
            "INSERT INTO lishitable1(time,historytime,historyevent,historynum)" 
            + "VALUES(?,?,?,?)",[cur1,lishitime,req.body.lishishijian,lishishuzhi],
        function (err) {
                if (err) throw err;
                console.log('管理员直接插入历史表');
            }
        );
    }
    if (typeof (req.body.biaoti) != "undefined") {
        var cur2 = new Date()
        global.db.query(
            "INSERT INTO dongtaitable1(name,date,img,author,content,kind,stock)" 
            + "VALUES(?,?,?,?,?,?,?)",[req.body.biaoti,cur2,req.body.imgsrc,req.body.author,req.body.dongtaineirong,req.body.kind,req.body.duiyinggupiao],
        function (err) {
                if (err) throw err;
                console.log('管理员直接插入动态表');
            }
        );
    }
    if (typeof (req.body.zhongleishezhi) != "undefined") {
       global.db.query(
           "INSERT INTO caibaotable1(kind,yingyee,stockname,company,nashui,holdwant,holdwantt,holdin,holdint) VALUES(?,?,?,?,?,?,?,?,?)",[req.body.zhongleishezhi,req.body.yingyee,req.body.guming,req.body.gongsi,req.body.nashui,req.body.holdwant,req.body.holdwantt,req.body.holdin,req.body.holdint],
      function (err) {
               if (err) throw err;
               console.log('管理员插入财务表失效');
           }
       );
    }
    res.render('input', { title: 'Express' });
});

module.exports = router;
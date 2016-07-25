var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function (req, res) {
	var pingluns = new Array
    if (typeof (req.session.text) != "undefined"){
        var aa = req.session.text
        global.db.query(
        "SELECT * FROM dongtaitable1 WHERE name=?",[aa],
        function S1(err, rows, fields){
            if (err) throw err;
            if (typeof (rows[0]) != "undefined") {
            	global.db.query(
            		"SELECT * FROM pingluntable1 WHERE dongtainame=?",[aa],
            		function S2(err,rows1,fields){
            			if(err) throw err
                		res.render('dongtai', { title: 'Express',dongtais:rows[0],pingluns:rows1});
		          	    req.session.destroy()            			
            		}
            	)
            }
        }
    )}
});
router.post('/', function (req, res) {
    var cur = new Date    
    global.db.query(
        "INSERT INTO pingluntable1(time,dongtainame,content)" 
        + "VALUES(?,?,?)", [cur, req.body.updown, req.body.biaoti],
            function (err) {
            if (err) throw err;
            console.log("插入评论表");
            var pingluns = new Array
            if (typeof (req.body.updown) != "undefined") {
                var aa = req.body.updown
                global.db.query(
                    "SELECT * FROM dongtaitable1 WHERE name=?", [aa],
                    function S1(err, rows, fields) {
                        if (err) throw err;
                        if (typeof (rows[0]) != "undefined") {
                            global.db.query(
                                "SELECT * FROM pingluntable1 WHERE dongtainame=?", [aa],
            		            function S2(err, rows1, fields) {
                                    if (err) throw err
                                    res.render('dongtai', { title: 'Express', dongtais: rows[0], pingluns: rows1 });
                                }
                            )
                        }
                    }
                )
            }
        }
    )
})
module.exports = router;
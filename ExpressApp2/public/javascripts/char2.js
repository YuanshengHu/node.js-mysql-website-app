$(document).ready(function (){
    var data3 = $("#m").contents("p:eq(0)").text()
    $.post('/zhishu',
		{
        tmper:data3 
    },
    function (data) {
        var data2 = new Array
        if (typeof ($(data).find('data5').text()) != "undefined") {
            data2.push({ value: $(data).find('data5').text(), date: $(data).find('time5').text() })
        }
        if (typeof ($(data).find('data4').text()) != "undefined") {
            data2.push({ value: $(data).find('data4').text(), date: $(data).find('time4').text() })
        }
        if (typeof ($(data).find('data3').text()) != "undefined") {
            data2.push({ value: $(data).find('data3').text(), date: $(data).find('time3').text() })
        }
        if (typeof ($(data).find('data2').text()) != "undefined") {
            data2.push({ value: $(data).find('data2').text(), date: $(data).find('time2').text() })
        }
        if (typeof ($(data).find('data1').text()) != "undefined") {
            data2.push({ value: $(data).find('data1').text(), date: $(data).find('time1').text() })
        } 
        var data = [{
                name: "first",
                data: data2
            }
        ]
        
        // Basic
        options = {
            height: 150,
            width: 600,
        }
        $("#basic").pista(data, options);
        })
})
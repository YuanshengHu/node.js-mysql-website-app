$(document).ready(function(){
	$("#buttondown").click(function(){
        var tmp = $('.search').length
		$.post('/',
		{
			tmper:tmp
		},
		function(data){
            if (($(data).find('tag0').text()) == 1) {
				$('#dongtaibiao').append("<div class='search'><div class='p1'><img src=" + $(data).find('img0').text() + '</></div><div class="p2"><p>'+$(data).find('name0').text()+'</p></div><div class="p3"><p>'+$(data).find('date0').text()+'</p></div></div>')
			} 
            if (($(data).find('tag1').text()) == 1) {
				$('#dongtaibiao').append("<div class='search'><div class='p1'><img src=" + $(data).find('img1').text() + '</></div><div class="p2"><p>'+$(data).find('name1').text()+'</p></div><div class="p3"><p>'+$(data).find('date1').text()+'</p></div></div>')
			}
            if (($(data).find('tag2').text()) == 1) {
				$('#dongtaibiao').append("<div class='search'><div class='p1'><img src=" + $(data).find('img2').text() + '</></div><div class="p2"><p>'+$(data).find('name2').text()+'</p></div><div class="p3"><p>'+$(data).find('date2').text()+'</p></div></div>')
			}
			if(($(data).find('img3').text())==1){
				$('#dongtaibiao').append("<div class='search'><div class='p1'><img src=" + $(data).find('img3').text() + '</></div><div class="p2"><p>'+$(data).find('name3').text()+ '</p></div><div class="p3"><p>'+$(data).find('date3').text()+'</p></div></div>')
			}
			if(($(data).find('img4').text())==1){
				$('#dongtaibiao').append("<div class='search'><div class='p1'><img src=" + $(data).find('img4').text() + '</></div><div class="p2"><p>'+$(data).find('name4').text()+ '</p></div><div class="p3"><p>'+$(data).find('date5').text()+'</p></div></div>')
			} 
        }
		)
	})
	$('.p2').click(function(){
		var tmp = $(this).contents("p:eq(0)").text()          ///这行对吗？
        $('#dongtaibiao').append("<form name='form2' class='xixihaha' method='post'><input type='text' name='idd' value=" + tmp + "><input type='submit'></form>")
        $('.xixihaha').submit()
	})
})
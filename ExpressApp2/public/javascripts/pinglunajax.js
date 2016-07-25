$(document).ready(function(){
	$('.div5').click(function(){
		var tmp = $(this).contents("p:eq(0)").text()          ///这行对吗？
        $('.div2').append("<form name='form2' class='xixihaha' method='post'><input type='text' name='idd' value=" + tmp + "><input type='submit'></form>")
        $('.xixihaha').submit()
	})
})
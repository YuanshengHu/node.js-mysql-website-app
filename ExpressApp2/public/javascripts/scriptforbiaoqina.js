$(document).ready(function(){
	$('.tab:first').show()
	$('#tab li a:first').addClass('active')
	$('ul#tabs li a').click(function(){
		var index = $('ul#tabs li a').index(this);
		$('ul#tabs li a').removeClass('active')
		$(".tab:visible").hide()
		$(".tab:eq("+index+")").show()
		$(this).addClass('active');
		return false
    })
    $('.tab2:first').show()
    $('#tab2 li a:first').addClass('active')
    $('ul#tabs2 li a').click(function () {
        var index = $('ul#tabs2 li a').index(this);
        $('ul#tabs2 li a').removeClass('active')
        $(".tab2:visible").hide()
        $(".tab2:eq(" + index + ")").show()
        $(this).addClass('active');
        return false
    })
})
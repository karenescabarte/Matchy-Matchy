$(document).ready(function () {
	$("main img").click(function () {
		var hiddenImage = $(this).attr("data-alt-src");

        if($(this).attr("src") == '/img/question_mark.png'){
            $(this).attr("src", hiddenImage);
        }else {
            $(this).attr("src", '/img/question_mark.png');
        }
	});
});

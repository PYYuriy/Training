$(document).ready(function() {
	alert("Use key 'up','down','left','right' to manipulate the fish");
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			case 37:
				$('img').animate({left: "-=10px"}, 'fast');
				$('img').attr('src', 'left.gif');
				break;
			case 38:
			    $('img').animate({top: "-=10px"}, 'fast');
			    $('img').attr('src', 'up.gif');
				break;
			case 39:
			    $('img').animate({left: "+=10px"}, 'fast');
			    $('img').attr('src', 'right.gif');
				break;
			case 40:
			    $('img').animate({top: "+=10px"}, 'fast');
			    $('img').attr('src', 'down.gif');
				break;
		}
	});
});
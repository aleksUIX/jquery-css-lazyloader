$(function() {
	
	
	$('body').on('lazyScrolled', function (e) {

        var scroll = $(window).scrollTop();
        var wHeight = $(window).height();

        $('.lazyLoader').each(function () {
            var thisOffset = $(this).parent().position();
            if ((scroll + wHeight) > thisOffset.top) {
                $(this).removeClass('lazyLoader');
            }
        });

        e.stopPropagation();
    });
	
	
	$(window).scroll(function () {

		//lazyloader
		$('body').trigger('lazyScrolled');
		
	});
		
});
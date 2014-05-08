(function ($, win, Modernizr, nav, doc) {

$.fn.headerToFixed = function (options) {

	var defaults = {
		speed : 300,
		windowWidth : $(win).width(),
		scrollTop : $(win).scrollTop()
	}, o = $.extend({}, defaults, options), $this = $(this), $clone = $('#logo').clone(), heightHeader = $this.height();

	if (o.windowWidth > 767) {
		if (o.scrollTop > heightHeader) {
			if (!$this.hasClass('fixed')) {
				$this.find('.sixteen').prepend($clone);
				$this.slideUp(o.speed).addClass('fixed').stop(true, true).slideDown(o.speed);
			}
		} else {
			if ($this.hasClass('fixed')) {
				$this.stop(true, true).slideUp(o.speed).stop(true, true).removeClass('fixed').slideDown(o.speed);
				$this.find('.sixteen #logo').fadeOut(o.speed).remove();
			}
		}
	}
};

if (objNavMenu.fixed) {
	if (!Modernizr.touch) {
		$(win).scroll(function () {
			$('#header').headerToFixed();
		});
	}		
}

}(jQuery, window, Modernizr, navigator, document));

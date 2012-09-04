// 创建一个闭包  
(function($) {
	// 插件的定义
	$.fn.ScrollSpy = function(options) {
		// build main options before element iteration
		var opts = $.extend({}, $.fn.ScrollSpy.defaults, options);
		// iterate and reformat each matched element
		return this.each(function() {
			$this = $(this);
			// do something
		});
	};
	// 插件的defaults
	$.fn.ScrollSpy.defaults = {
		nav: '#nav-box'
	};
// 闭包结束
})(jQuery);
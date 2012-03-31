/*!
 * jQuery ${NAME} - ${DESCRIPTION} - http://wbotelhos.com/${NAME_LOWER}
 * ------------------------------------------------------------------------
 *
 * jQuery ${NAME} ${FULL_DESCRIPTION}
 *
 * Licensed under The MIT License
 *
 * @version        0.1.0
 * @since          ${SINCE}
 * @author         Washington Botelho
 * @documentation  wbotelhos.com/${NAME_LOWER}
 * @twitter        twitter.com/wbotelhos
 *
 * Usage with default values:
 * ------------------------------------------------------------------------
 * $('#${NAME_LOWER}').${NAME_LOWER}();
 *
 * <div id="${NAME_LOWER}"></div>
 *
 */

;(function($) {

	var methods = {
		init: function(settings) {
			return this.each(function() {

				var self	= this,
					$this	= $(self).empty().data('settings', self.opt);
	
				self.opt = $.extend({}, $.fn.${NAME_LOWER}.defaults, settings);

				$this.data('${NAME_LOWER}', true);
			});
		}, set: function(settings) {
			return this.each(function() {
				var $this	= $(this),
					actual	= $this.data('settings');

				$this.clone().insertBefore($this);

				$this.remove();

				$this.${NAME_LOWER}($.extend({}, actual, settings));
			});
		}
	};

	$.fn.${NAME_LOWER} = function(method) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' + method + ' does not exist!');
		} 
	};

	$.fn.${NAME_LOWER}.defaults = {
		
	};

})(jQuery);

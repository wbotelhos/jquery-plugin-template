/**
 * jQuery Plugin - A Plugin - http://wbotelhos.com/plugin
 * ---------------------------------------------------------------------------------
 *
 * jQuery Plugin is a plugin that  automatically.
 *
 * Licensed under The MIT License
 *
 * @version			0.1.0
 * @since			xx.xx.2011
 * @author			Washington Botelho dos Santos
 * @documentation	http://wbotelhos.com/plugin
 * @twitter			http://twitter.com/wbotelhos
 * @license			http://opensource.org/licenses/mit-license.php
 * @package			jQuery Plugins
 *
 * Usage with default values:
 * ---------------------------------------------------------------------------------
 * $('#plugin').plugin();
 *
 * <div id="plugin"></div>
 *
 * $('.plugin').plugin();
 *
 * <div class="plugin"></div>
 * <div class="plugin"></div>
 * <div class="plugin"></div>
 *
 */

;(function($) {

	$.fn.plugin = function(settings) {

		if (this.length == 0) {
			debug('Selector invalid or missing!');
			return;
		} else if (this.length > 1) {
			return this.each(function() {
				$.fn.plugin.apply($(this), [settings]);
			});
		}

		var opt			= $.extend({}, $.fn.plugin.defaults, settings),
			$this		= $(this),
			id			= this.attr('id');

		if (id === undefined) {
			id = 'plugin-' + $this.index();
			$this.attr('id', id); 
		}

		

		return $this;
	};
	
	$.fn.plugin.method = function(value, idOrClass) {
		var context = getContext(value, idOrClass, 'method'),
			options = $(idOrClass).data('options');

		if (idOrClass.indexOf('.') >= 0) {
			return;
		}

		

		return $.fn.plugin;
	};

	function getContext(value, idOrClass, name) {
		var context = undefined;

		if (idOrClass == undefined) {
			debug('Specify an ID or class to be the target of the action.');
			return;
		}

		if (idOrClass) {
			if (idOrClass.indexOf('.') >= 0) {
				var idEach;

				return $(idOrClass).each(function() {
					idEach = '#' + $(this).attr('id');

					if (name == 'method') {
						$.fn.plugin.method(value, idEach);
					}
				});
			}

			context = $(idOrClass);

			if (!context.length) {
				debug('"' + idOrClass + '" is a invalid identifier for the public funtion $.fn.plugin.' + name + '().');
				return;
			}
		}

		return context;
	};

	function debug(message) {
		if (window.console && window.console.log) {
			window.console.log(message);
		}
	};

	$.fn.plugin.defaults = {
		attribute:	null
	};

})(jQuery);
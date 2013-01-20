/*!
 * jQuery ${name} - ${title}
 * ----------------------------------------------------------------------
 *
 * jQuery ${name} ${description}
 *
 * Licensed under The MIT License
 *
 * @version        ${version}
 * @since          ${since}
 * @author         Washington Botelho
 * @documentation  wbotelhos.com/${slug}
 *
 * ----------------------------------------------------------------------
 *
 *  ${demo_js}
 *
 *  ${demo_html}
 *
 */

;(function($) {

  var methods = {
    init: function(settings) {
      return this.each(function() {
        this.opt = $.extend({}, $.fn.${slug}.defaults, settings);

        var $this = $(this).off('.${slug}').addClass('${slug}');

        this.opt.boxes.addClass('${slug}-box');

        $this.data({ 'settings': this.opt, '${slug}': true });
      });
    }
  };

  $.fn.${slug} = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' + method + ' does not exist!');
    }
  };

  $.fn.${slug}.defaults = {
    ${options}
  };

})(jQuery);

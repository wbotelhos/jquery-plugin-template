/*!
 * jQuery {{name}} - {{title}}
 *
 * Licensed under The MIT License
 *
 * @author  : {{author}}
 * @doc     : http://{{domain}}/{{slug}}
 * @version : {{version}}
 *
 */

;(function($) {

  var methods = {
    init: function(settings) {
      return this.each(function() {
        methods.destroy.call(this);

        this.opt = $.extend(true, {}, $.fn.{{slug}}.defaults, settings);

        self.data({ 'settings': this.opt, '{{slug}}': true });
      });
    },

    destroy: function() {
      return $(this).each(function() {
      });
    }
  }

  $.fn.{{slug}} = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' + method + ' does not exist!');
    }
  };

  $.fn.{{slug}}.defaults = {
    {{options}}
  }

})(jQuery);

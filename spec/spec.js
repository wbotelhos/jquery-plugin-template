describe('${name}', function() {
  beforeEach(function() {
    Helper.html('${demo}');
  });

  afterEach(function() { Helper.clear(); });

  describe('options', function() {
    it ('has the right value options', function() {
      // given
      var ${slug} = $.fn.${slug}

      // when
      var opt = ${slug}.defaults

      // then
      expect(opt.${name}).toBeTruthy();
    });
  });

  describe('channing', function() {
    it ('is chainable', function() {
      // given
      var self = $('${selector}');

      // when
      var ref = self.${slug}();

      // then
      expect(ref).toBe(self);
    });
  });

  it ('does not bind twice', function() {
    // given
    var ${selector} = $('#${selector}');

    // when
    ${selector}.${slug}();

    // then
    expect(${selector}).toHaveClass('${slug}');
  });
});

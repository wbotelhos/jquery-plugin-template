describe('{{name}}', function() {
  beforeEach(function() {
    Helper.html('{{demo_html}}');
  });

  afterEach(function() {
    Helper.clear();
  });

  describe('options', function() {
    it ('has the right value options', function() {
      // given
      var self = $.fn.{{slug}}

      // when
      var opt = {{slug}}.defaults

      // then
      expect(opt.foo).toBeTruthy();
    });
  });

  describe('channing', function() {
    it ('is chainable', function() {
      // given
      var self = $('{{slug}}');

      // when
      var ref = self.{{slug}}();

      // then
      expect(ref).toBe(self);
    });
  });
});

function context(description, spec) {
  describe(description, spec);
};

describe('${name}', function() {

  beforeEach(function() {
    $('body').append('${demo}');
  });

  afterEach(function() {
    $('#${selector}').remove();
  });

  describe('channing', function() {
    it ('is chainable', function() {
      // given
      var ${selector}  = $('#${selector}'),
          clazz  = 'some-class';

      // when
      ${selector}.${slug}().addClass(clazz);

      // then
      expect(${selector}).toHaveClass(clazz);
    });
  });

  describe('clazz option', function() {
    context('with default value', function() {
      it ('set it to wrapper', function() {
        // given
        var ${selector} = $('#${selector}');

        // when
        ${selector}.${slug}();

        // then
        expect(${selector}).toHaveClass('${slug}');
      });
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

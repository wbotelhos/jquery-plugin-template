describe('Normal', function() {

	beforeEach(function() {
	    $('body').append('<div id="${NAME_LOWER}"></div>');
	});

	afterEach(function() {
		$('#${NAME_LOWER}').remove();
	});

	it ('[] should be chainable', function() {
		// given
		var $this		= $('#${NAME_LOWER}'),
			className	= 'my-class';

		// when
		$this.${NAME_LOWER}().addClass(className);

		// then
	    expect($this).toHaveClass(className);
	});

});

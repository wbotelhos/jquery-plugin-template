describe('${NAME}', function() {

	beforeEach(function() {
	    $('body').append('<div id="NAME_LOWER"></div>');
	});

	afterEach(function () {
		$('#NAME_LOWER').remove();
	});

	describe('using ...', function() {

		it('should be true', function() {
			// given
			var $NAME_LOWER = $('#NAME_LOWER');

			// when
			$NAME_LOWER;

			// then
		    expect($NAME_LOWER).toBetruthy();
		});

	});

});
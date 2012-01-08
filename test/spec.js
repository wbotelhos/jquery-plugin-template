describe('Using ID', function() {

	beforeEach(function() {
	    $('body').append('<div id="${NAME_LOWER}"></div>');
	});

	afterEach(function() {
		$('#${NAME_LOWER}').remove();
	});

	it ('xpto should xpto', function() {
		// given
		var $${NAME_LOWER} = $('#${NAME_LOWER}');

		// when
		$${NAME_LOWER}.;

		// then
	    expect($${NAME_LOWER}).toBetruthy();
	});

});

describe('Using class', function() {

	beforeEach(function() {
	    $('body').append('<div class="${NAME_LOWER}"></div><div class="${NAME_LOWER}"></div><div class="${NAME_LOWER}"></div>');
	});

	afterEach(function() {
		$('.${NAME_LOWER}').remove();
	});

	it ('xpto should xpto', function() {
		// given
		var $${NAME_LOWER}s = $('.${NAME_LOWER}');

		// when
		$${NAME_LOWER}s.;

		// then
	    expect($${NAME_LOWER}s.eq(0)).toBetruthy();
	    expect($${NAME_LOWER}s.eq(1)).toBetruthy();
	    expect($${NAME_LOWER}s.eq(2)).toBetruthy();
	});

});

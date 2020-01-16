(function() {
	var cookie = function (name, value, seconds, domain) {
		if (typeof value == 'undefined') {
			name += '=';
			value = document.cookie.split(';');
			for (var e = 0; e < value.length; e++) {
				var k = value[e].trim();
				if (k.indexOf(name) == 0) {
					return unescape(k.substring(name.length, k.length));
				}
			}
			return null;
		}
		if (seconds) {
			var expires = new Date();
				expires.setTime(expires.getTime() + seconds * 1000);
			seconds = "; expires=" + expires.toGMTString();
		} else {
			seconds = '';
		}
		document.cookie = name + "=" + escape(value) + seconds + "; path=/" + (domain ? ";domain=" + domain : '');
	};
	var setDark = function() {
		$('body').addClass('darkstyle');
		$('.btn-dark').text('明');
		cookie('darkstyle', 1);
	};
	var delDark = function() {
		$('body').removeClass('darkstyle');
		$('.btn-dark').text('暗');
		cookie('darkstyle', 0);
	};
	var is_dark = cookie('darkstyle');
	$('body').append('<a href="javascript:;" class="btn-dark"></a>');
	if (is_dark) {
		setDark();
	}
	$('.btn-dark').click(function(o) {
		if ($('body').hasClass('darkstyle')) {
			delDark();
		} else {
			setDark();
		}
	});
})();
"use strict";

$(document).ready(function() {
	var panel = $('<li class="lights-out"><a title="" href="#" data-original-title="Dark Theme"><i class="fa fa-fw fa-lightbulb-o"></i><span class="visible-xs-inline">Dark Theme</span></a></li>');

	$('ul#logged-in-menu').prepend(panel);
	$('ul#logged-out-menu').prepend(panel);

	var enabled = localStorage.getItem('user:theme') === 'lights-out';
	$('body').toggleClass('lights-out',  enabled);

	panel.on('click', function() {
		enabled = !$('body').hasClass('lights-out');
		$('body').toggleClass('lights-out',  enabled);
		localStorage.setItem('user:theme', enabled ?  'lights-out' : '');
	});
});
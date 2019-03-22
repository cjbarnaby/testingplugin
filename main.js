window.fbAsyncInit = function() {
	FB.init({
		xfbml: true,
		version: 'v3.2'
	});
};

(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s);
	js.id = id;
	js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

var surveyValue;

document.addEventListener("DOMContentLoaded", function() {
	var fbChatDiv = document.querySelector(".fb-customerchat");
	surveyValue = document.querySelector(".num").innerText;
	fbChatDiv.setAttribute("ref", surveyValue); 
	console.log(`num: ${surveyValue}`);
});

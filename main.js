window.fbAsyncInit = function() {
	FB.init({
		xfbml: true,
		version: 'v3.2'
	});
	FB.CustomerChat.showDialog();
};

(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s);
	js.id = id;
	js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

document.addEventListener("DOMContentLoaded", function() {
	surveyValue = document.querySelector(".num").innerText;

	var attributes = {
		"attribution": "setup_tool",
		"class": "fb-customerchat",
		"greeting_dialog_display": "show",
		"logged_in_greeting": "Hi: I'm Cora. I'd like to have a conversation with you about this result.",
		"logged_out_greeting": "Hi: I'm Cora. I'd like to have a conversation with you about this result.",
		"page_id": "1779324532358727",
		"ref": surveyValue,
		"theme_color": "#00d1e9"
	};

	var fbRoot = document.createElement("div");
	fbRoot.setAttribute("id", "fb-root");
	var fbChatDiv = document.createElement("div");
	for (var k in attributes) {
		fbChatDiv.setAttribute(k, attributes[k]);
	}
	document.body.insertBefore(fbChatDiv, document.body.firstChild);
	document.body.insertBefore(fbRoot, document.body.firstChild);
});

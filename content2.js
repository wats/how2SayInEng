chrome.extension.sendRequest({text : window.getSelection().toString()});
window.addEventListener('keydown', function(e) {
    var word = window.getSelection().toString();
    console.log("word is " + word);
    if(e.metaKey && e.keyCode == 13) {
	
	var word = window.getSelection().toString();
	alert("選択ワード:" + word);
	console.log("e.metaKey is :" + e.metaKey);
    }
}, false);
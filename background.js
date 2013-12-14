function getClickHandler() {
    return function(info, tab) {
	var word = window.getSelection().toString();
        alert("選択ワード : " + word );
    };
};

function clickHandle(){
	var word = window.getSelection().toString();
        alert(word );    
}

var parentId = chrome.contextMenus.create({
    "title" : "how2SayInEng",
    "type" : "normal",
    "contexts" : ["all"],
    "onclick" : getClickHandler()
});

//chrome.extention.onMessage.addListener(function(req, sender, callback) {
//    if (sender.tab) { 
//	if(req.text !==undefined){
//	    console.log("text is " + req.text);
//	}
//    }
//}
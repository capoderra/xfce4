

//background.js 需要先卸载extension, 不然只是ctrl+r不会更新它滴
//日誌控制
var manifest = chrome.runtime.getManifest()
if (manifest.key === undefined) //debug versoin
{
    chrome.storage.local.set({
        'progMode': 'debug'
    }, function() {});

} else { //product version
    chrome.storage.local.set({
        'progMode': 'product'
    }, function() {});
}
//end of 日誌控制


function initLocalStorage() {

    if (localStorage.getItem('state') == null) {
        console.log('第一次工作， 設置state初始值爲enable');
        localStorage.setItem('state', 'enable');
    }

    if (localStorage.getItem('fontColorArr') == null) {
        fontColorArr = ["#252923", "#000000", "#dce8d5", "#0A296E", "#378712"];
        bgColorArr = ["#a5cca5", "#FFFFFF", "#306330", "#8C7723", "#001100"];

        var strFontColorArr = JSON.stringify(fontColorArr);
        var strBGColorArr = JSON.stringify(bgColorArr);
        localStorage.setItem('fontColorArr', strFontColorArr);
        localStorage.setItem('bgColorArr', strBGColorArr);
    }

    if (localStorage.getItem('futureFontColor') == null) {
        localStorage.setItem('futureFontColor', fontColorArr[0]);
        localStorage.setItem('futureBGColor', bgColorArr[0]);
    }

}

function updateState() {
    if (localStorage.getItem('state') == 'enable') {
        //Set some content from background page
        chrome.storage.local.set({
                "switchState": "enable"
            },
            function() {
                console.log(" switchState set to be 'enable' in background.js ");
            });
    } else {
        //Set some content from background page
        chrome.storage.local.set({
                "switchState": "disable"
            },
            function() {
                console.log("switchState set to be 'disable' in background.js ");
            });
    }
}

function constructBGMSG() {
    var customInfo = {
        from: 'background',
        subject: 'useLastTheme'
    };
    customInfo.customColor = localStorage.getItem('futureFontColor');
    customInfo.customBGColor = localStorage.getItem('futureBGColor');
    return customInfo;
}

initLocalStorage();
updateState();

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {

    updateState();
    chrome.storage.local.get("switchState",
        function(result) {
            if (result.switchState == 'enable') {

                if (changeInfo.status == 'complete') {
                    console.log('選項卡載入完成' + ' id ' + tab.id + ' url: ' + tab.url);
                    chrome.tabs.sendMessage(tab.id, constructBGMSG(),
                        function(response) {});
                }
            }
        });
});

// Check whether new version is installed
chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason == "install"){
        console.log("This is a first install!");
	var newURL = "http://software-introduce.items.pub/wiki/index.php?title=Drag_your_mouse_to_change_Google-Chrome-Browser_color";
	chrome.tabs.create({ url: newURL });

    }else if(details.reason == "update"){
        var thisVersion = chrome.runtime.getManifest().version;
        console.log("Updated from " + details.previousVersion + " to " + thisVersion + "!");
    }
});

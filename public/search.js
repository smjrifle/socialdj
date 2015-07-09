window.onload = function() {

    var messages = [];
    var sendButton = document.getElementById("send");
    var content = document.getElementById("content");
    var name = document.getElementById("search");
    

    sendButton.onclick = sendMessage = function() {
        if(name.value == "") {
            alert("Please type your search!");
        } else {
            gapi.client.setApiKey('248382530720-hv5ge8jgv4ipldg5h9cus11cua1a67g8.apps.googleusercontent.com');
            gapi.client.load('youtube', 'v3', function() {
               searchByKeyword();
           });

        }
    };
}

searchByKeyword = function() {
  var results = gapi.client.youtube.search.list({
    q: 'korn',
    part: 'snippet'
});

  for(var i in results.items) {
    var item = results.items[i];
    Logger.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
}
}
window.onload = function() {

    var messages = [];
    var socket = io.connect('http://localhost:3700');
    var sendButton = document.getElementById("send");
    var content = document.getElementById("content");
    var name = document.getElementById("search");


    socket.on('message', function (data) {
        // if(data.message) {
        //     messages.push(data);
        //     var html = '';
        //     for(var i=0; i<messages.length; i++) {
        //         html += '<b>' + (messages[i].username ? messages[i].username : 'Server') + ': </b>';
        //         html += messages[i].message + '<br />';
        //     }

        //     content.innerHTML = html;
        //     content.scrollTop = content.scrollHeight;
        // } else {
        //     console.log("There is a problem:", data);
        // }
    });

    sendButton.onclick = sendMessage = function() {
        if(name.value == "") {
            alert("Please type your search!");
        } else {
            searchByKeyword();
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
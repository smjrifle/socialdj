window.onload = function() {

    var messages = [];
    var sendButton = document.getElementById("send");
    var content = document.getElementById("content");
    var name = document.getElementById("search");

    sendButton.onclick = function() {
        authorize();
    }
}
$(document).ready(function() {
    $("#send").keyup(function(e) {
        if(e.keyCode == 13) {
            authorize();
        }
    });
});

authorize = function() {
    if(name.value == "") {
        alert("Please type your search!");
    } else {
        $('#search-container').html('Searching....');
        gapi.client.setApiKey('AIzaSyDuZAsmDqaWeCj7XpK2Bz345Lij6VomtDc');
        gapi.client.load('youtube', 'v3', function() {
         searchByKeyword(name.value);
     });

    }
};

searchByKeyword = function(name) {
  var request = gapi.client.youtube.search.list({
     q: name,
     part: 'snippet',
     maxResults: 10                        
 });
  request.execute(function(response) {
    var str = JSON.stringify(response.result);
    $('#search-container').html('Results<br/>');
    for(var i in response.result.items) {
        var item = response.result.items[i];
        $('#search-container').html($('#search-container').html() + "<div class='col-sm-12 row'>" + "<img src='" + item.snippet.thumbnails.high.url + "'/><br/>VideoId: <a href='https://www.youtube.com/watch?v=" + item.id.videoId + "'>" + item.id.videoId + "</a> <br/>Title:" + item.snippet.title + " " + "</div><br/>");
    }
});
}
var express = require("express");
var app = express();
var port = 3700;


app.set('views', __dirname + '/tpl');
app.set('view engine', "jade");

app.engine('jade', require('jade').__express);

app.get("/login", function(req, res){
    res.render("login");
});
app.get("/chat", function(req, res){
    res.render("page");
});


app.post('/login',function(req, res){
    console.log(res);
});


app.use(express.static(__dirname + '/public')); 

var io = require('socket.io').listen(app.listen(port));

io.sockets.on('connection', function (socket) {
    socket.emit('message', { message: 'welcome to the chat' });
    socket.on('send', function (data) {
        io.sockets.emit('message', data);
    });
});

console.log("Listening on port " + port);

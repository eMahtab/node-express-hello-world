var express=require('express');
var app=express();

var routes=require('./routes/route.js');

app.set('view engine','ejs');

app.use(express.static(__dirname + '/public'));

app.get('/',routes.home);
app.get('/login',routes.login);


//Handling 404
app.use(function(req, res) {
     res.status(404).render('404');
});

  
// Handling 500
app.use(function(error, req, res, next) {
     res.status(500).render('500');
});

var port = process.env.PORT || 3000;

var server=app.listen(port,function(req,res){
    console.log("Catch the action at http://localhost:"+port);
});
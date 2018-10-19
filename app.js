let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
var express		= require('express'),
	app			= express(),
	bodyParser	= require('body-parser');

app.set('view engine','ejs');
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function(req,res){
	res.render('index');
})
app.get('/flowers',function(req,res){
	res.render('flowers');
})
app.get('/buckets',function(req,res){
	res.render('buckets');
})
app.get('/about',function(req,res){
	res.render('about');
})


app.listen(port,function(){
	console.log('App is running on port ',port);
});
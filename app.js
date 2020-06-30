const express = require('express')




const app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));



const messages = [
   {
     text: "Hi there!",
     user: "Big chief",
     added: new Date()
   },
   {
     text: "Hello World!",
     user: "edub",
     added: new Date()
   }
];

app.use(express.urlencoded({extended:false}));

app.get('/', async function(req, res){
	console.log("you are home");
	res.render('index.ejs',{title: "Mini Messageboard", messages:messages});
});



app.get('/new', async function(req, res){
	console.log("new message form");
	res.render('form.ejs');

});

app.post('/new', async function(req, res){
	let messageText =  req.body.messageText;
	let messageUser =  req.body.user;
	messages.push({text:messageText, user:messageUser, added: new Date()});
	res.redirect('/');

})





app.listen(3000, function(){
	console.log("listening on port 3000");
})
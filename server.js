var express = require('express');
var app = express();
var path = require('path');

//konek ke view engine --ejs
app.set('veiw engine', 'ejs');
//buat folder public untuk pemisah
app.use(express.static('public'));

//ambil dari home.ejs
app.get('/', (req, res) => {
	res.render('home.ejs')
})
//ambil dari about.ejs
app.get('/contact', (req, res) => {
	res.render('contact.ejs')
})
//ambil dari about.ejs
app.get('/about', (req, res) => {
	res.render('about.ejs')
})
//kalau salah ketik url
app.get('/*', (req, res) => {
	res.render('404.ejs')
})

//web server running di http://127.0.0.1:8081/
app.listen(8081, function(){
  console.log('Server running at http://127.0.0.1:8081/');
})

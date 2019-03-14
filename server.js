const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});
app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));

// get an instance of router
var router = express.Router();

// home page route (http://localhost:8080)
// router.get('/', function(req, res) {
//     res.send('im the home page!');  
// });

// about page route (http://localhost:8080/about)
router.get('/berlin', function(req, res) {
    res.send('im the Berlin page!'); 
});

router.get('/london', function(req,res) {
  res.send('Hello London');
});

// apply the routes to our application
app.use('/', router);

//moongoose connection to Mongo DB
var mongoose = require('mongoose');
var validator = require('validator');

mongoose.connect("mongodb+srv://mytinerary-klmlp.mongodb.net/test");

mongoose.connection.once('open', function (){
  console.log("Connection made")
}).on('error', function(err){
  console.log("Connection failed due to" + err)
});

var Schema = mongoose.Schema;

var CitySchema = new Schema ({
  name: String,
  country: String

});

var City = mongoose.model('city', CitySchema);


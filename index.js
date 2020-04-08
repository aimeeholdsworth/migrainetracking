 
      const express = require('express'); //importing express
      const Datastore = require('nedb'); //imports nedb to be used for the database
      




      const app = express(); //creates web app function that calls express
      //links to port 2000 and tells the app to listen

      const port = process.env.PORT || 2000;
      app.listen(port, () => {
          console.log(`Starting server at ${port}`);
      });

      app.use(express.static('public')); //makes it so anything in this folder is
      //publicly accessible using express. 

      app.use(express.json({limit:'1mb'}));//allows to receive data with post get
      //limits to only receiving 1mb of data

      app.use(function(req, res, next) { //allows CORS
		  res.header("Access-Control-Allow-Origin", "*");
		  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		  next();
		});
      app.use(require("body-parser").json());


      const database = new Datastore('database.db'); //creates the database file where all the data is held
      database.loadDatabase();


      


      app.get('/api', (request, response)=>{



      	database.find({}).sort({data_date: 1}).exec(function (err,docs){ //gets the data from the database and orders it in ascending order
      		
      			response.json(docs); 
      			console.log(docs );

      		})

      		

      	});

     




      app.post('/api', (request, response)=>{ //posts the data the user inputs to the database
      	console.log('I got a request');
      	

      	const success_data = request.body;
      	const timestamp = Date.now();
      	success_data.timestamp = timestamp;
      	database.insert(success_data);
      	response.json(success_data);
      });






      
     











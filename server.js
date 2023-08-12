 const app = require('./index');
 const cron = require('node-cron');
 const priceChecker = require('./controllers/priceChecker');
 const mongoose = require('mongoose');
  const Site = require('./models/siteModel');
 const dotenv = require('dotenv');
 dotenv.config({ path: './config.env' });
 console.log(process.env.con_string);
 mongoose.connect(process.env.con_string,{useNewUrlParser:true}).then((conn)=>{
    console.log('DB connection successful');
   // priceChecker('http://localhost:4000/api/v1/sites');
    //console.log(conn.connection);
 });
//  const testSite = new Site({
//   user: "uttamreddy@gmail.com",
//   priceLocation: "span.price",
//   nameLocation: "span.name",
//   url: "https://www.amazon.in/Apple-MacBook-16-inch-Storage-Intel-Core-i9/dp/B081JWZQJB/ref=sr_1_1_sspa?dchild=1&keywords=macbook+pro&qid=1596150003&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzV0dZM0dZV0dZV0dZJmVuY3J5cHRlZElkPUEwNjY0NjQ5Mk5ZM0dZV0dZV0dZJmVuY3J5cHRlZEFkSWQ9QTA0NjQ0NzQzU0dZV0dZV0dZV0dZJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==",
//   image: "https://images-na.ssl-images-amazon.com/images/I/71L2iBSyyOL._SL1500_.jpg",
//   budget: 200000,
//   type: "stock"

// });


// testSite.save().then((doc) => {console.log(doc)}).catch((err) => {console.log(err) });
 
app.listen(process.env.port, () => {
    console.log(`Server listening on port ${process.env.port}`);
  });

// ...

// Schedule tasks to be run on the server.
// cron.schedule('* * * * *', function() {
//    //console.log('running a task every minute');
//    priceChecker('http://localhost:4000/api/v1/sites');


//  });



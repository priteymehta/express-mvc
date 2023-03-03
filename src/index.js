const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const errorController = require('./controllers/error');
const port = 3031;

//express instance
const app = express();

app.set('view engine', 'ejs'); // configure view engine
app.set('views', 'src/views'); // set views path

const adminRoutes = require('./routes/admin');
const customerRoutes = require('./routes/customer');

// middlewares
app.use(express.static(path.join(__dirname, 'public'))); // static files 
app.use('/admin', adminRoutes);
app.use(customerRoutes); // default customer route
app.use(errorController.get404); // error middleware

app.listen(port, () => 
console.log(`Server started. Listening to ${port}`));
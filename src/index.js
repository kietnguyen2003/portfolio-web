const express = require('express')
const handlebar = require('express-handlebars')
const app = express()
const port = 5000
const path = require('path')
const morgan = require('morgan')

// Route
const userRoute = require("../route/userRoute.js");

// HTTP logger
app.use(morgan('combined'))

const hbs = handlebar.create({
  extname: 'hbs'
})
// Engine template
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));

// Static file
app.use(express.static(path.join(__dirname, 'public')));

// 
app.get('/', async (req, res) => {
  return res.render('login', {
    title: "Login page"
  })
});
// Use Route
app.use("/user", userRoute);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`)
})
const path = require('path');
const express = require('express');
const db = require('./database')
const ENV = process.env.NODE_ENV
const PORT = process.env.PORT || 5000;

const app = new express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/cities', require('./api/cities'));
app.use('/api/weather', require('./api/weather'))

if (ENV === 'production') {
    // static folder
    app.use(express.static(path.join(__dirname, '../client/build')));

    // Handle SPA
   // app.get(/.*/, (req, res) => {
     //   res.sendFile(__dirname + 'public/index.html')
   // });

   app.use((req, res) => {
       res.sendFile(path.join(__dirname, '../client/build/index.html'))
   })
}


app.listen(PORT, () => console.log(`server listening in port: ${PORT}...`));

db.query('SELECT NOW()', (err, res) => {
    if (err.error) return console.log(err.error)
console.log(`PostgreSQL connected: ${res[0].now}`);
console.log(res)
})

module.exports = app;

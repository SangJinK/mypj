const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const app = express();
const server = require("http").createServer(app);
server.listen(8080);
app.use(express.static("build"));
const dotenv = require('dotenv');


dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'mypj',
    cookie: {
        httpOnly: true,
        secure: false,
    },
    name: 'session-cookie',
}));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'build/index.html'));
});


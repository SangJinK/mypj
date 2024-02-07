const express = require('express');
const session = require('express-session');
const app = express();
const server = require("http").createServer(app);
server.listen(8080,()=>{
    console.log("server start");
});
app.use(express.static("build"));
const dotenv = require('dotenv');
const mysql = require('mysql');
const cors = require('cors');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: '1234',
    database: "user"
});
connection.connect();

dotenv.config();
app.use(cors());
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
    res.sendFile(__dirname,'build/index.html');
});

app.post('/signup', (req, res) => {
    const userInfo = req.body;
    const query = 'INSERT INTO userinfo (user_ID, pwd) VALUES (?, ?)';
    connection.query(query, [userInfo.username, userInfo.password], (err) => {
        if (err) {
            console.error('Error inserting user:', err);
            return res.status(500).send('Error signing up');
        }
        res.send(0);
       
    });
});

app.post('/login', (req,res)=>{
    const userInfo = req.body;
    const query = 'SELECT * FROM userinfo WHERE user_ID =?';
    connection.query(query, [userInfo.username], (err, result) => {
        if (err) {
            console.error('Error selecting user:', err);
            return res.status(500).send('Error logging in');
        }
        if (result.length === 0) {
            res.send('alert("아이디가 없습니다.")');
        } else {
            if (result[0].password === userInfo.password) {
                req.session.username = result[0].username;
                res.send('<script>alert("로그인이 되었습니다.")</scripalert>');
            } else {
                res.send('<script>alert("비밀번호가 일치하지 않습니다.")</script>');
            }
        }
    });
    
   
});

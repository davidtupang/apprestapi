var mysql = require('mysql');
//Koneksi
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'node'
});

conn.connect((err)=>{
    if(err) throw err;
    console.log('Mysql Terkoneksi');

});
module.exports=conn;

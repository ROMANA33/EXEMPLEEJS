const mysql = require("mysql");
// creer une connexion mysql
const con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "1234",
    database:tablefilm
});

con.connect(function(err) {
	if (err) {
		throw err;
	} else {
		console.log("connected to mysql");
	}
});
const donnesInserer = [
    { ID:1,title:"",country:""},
    {ID:2,title:"", country}
];


const sql = "INSERT INTO serie(ID , Title , Country)VALUES ?";
con.query(sql,[donnesInserer.map(item =>[item.ID , item.title ,item.Country])] ,function(err,result){
if (err){
    throw err;
}
console.log("record insert: " + result.affectedRows);
con.end();

});
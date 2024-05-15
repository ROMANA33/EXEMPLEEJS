const mysql = require("mysql");
// creer une connexion mysql
const con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "1234",
    database:tablefilm,
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

const addColumnQuery = [
  { ID:1,title:"",country:""},
];

pool.query(addColumnQuery, (error, results) => {


const sql = "INSERT INTO serie (ID , Title , Country)VALUES";
con.query(sql,[donnesmodifier.map(item =>[item.ID , item.title ,item.Country])]),function(err,result){

  if (error) {
    console.error('Erreur lors de l\'ajout de la colonne :', error);
  } else {
    console.log('Colonne ajoutée avec succès !');
  }
}
});

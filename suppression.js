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
const dropTableQuery = [
    { ID:1,title:"",country:""},
];

pool.query(dropTableQuery, (error, results) => {

const sql = "dropTableQuery(ID , Title , Country)VALUES";
con.query(sql,[donnesasupprimer.map(item =>[item.ID , item.title ,item.Country])]),function(err,result){
  if (error) {
    console.error('Erreur lors de la suppression de la table :', error);
  } else {
    console.log('Table supprimée avec succès !');
  }
}
});

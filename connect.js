const { title } = require("process");

con.connect(function(err){
if (err){
    throw err;

}else{
    console.log("connected to mysql");
}
});

const donnesInserer=[
    {ID:1 ,title: "" , Country: ""},
    {ID:2 ,title:"", Country:""}
];


const sql = "INSERT INTO serie (ID , Title , Country)VALUES";
con.query(sql,[donnesInserer.map(item =>[item.ID , item.title ,item.Country])],function(err,result){
if (err){
    throw err;
}
console.log("record insert: " + result.affectedRows);
con.end();
});
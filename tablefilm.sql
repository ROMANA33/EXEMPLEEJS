CREATE database if not exist tablefilm;
use tablefilm;
CREATE table if not exists serie(
    ID int primary key;
    title varchar(115);
    country varchar(115);
);
INSERT INTO serie(ID,title,COUNTRY)
VALUES
(1,'One piece','japan'),
(2,'Descendants of the sun','korea'),
(3,'test','indonesia'),
(4,'lose','japan');
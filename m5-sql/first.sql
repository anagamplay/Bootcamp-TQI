CREATE TABLE pessoas (
    id INT NOT NULL PRIMARY KEY AUTOINCREMNET,
    pessoa VARCHAR(20) NOT NULL,
    nascimento DATA
)

INSERT INTO pessoa (nome, nascimento) VALUES ('Ana', '2006 06 15')
CREATE DATABASE API_Estudiantes;

USE API_Estudiantes;

CREATE TABLE Estudiantes(
Id INT auto_increment primary key,
Nombre varchar(20),
Apellido varchar(20),
Edad int,
Carrera varchar(30)
);

SELECT * FROM Estudiantes;

INSERT INTO Estudiantes (Nombre, Apellido, Edad, Carrera) VALUES ('Luis Angel', 'Fernandez', 20, 'Ing. Sistemnas')
import pool from '../database/connection.js'

//Get All Students
export const getStudents = async(req, res)=>{
    try{
        const [result] = await pool.query(`SELECT * FROM Estudiantes`);
        if(!result.length) return res.status(404).json({"message": "La tabla no contiene ningun dato"});
        res.json(result);
    }
    catch(err){
        res.status(500).json({"message": err.message});
    }
}

//Create a new student
export const createStudent = async(req, res)=>{
    try{
        const {nombre, apellido, edad, carrera} = req.body;
        const [result] = await pool.query(`INSERT INTO Estudiantes (Nombre, Apellido, Edad, Carrera) VALUES (?, ?, ?, ?)`, [
            nombre, apellido, edad, carrera
        ]);
        res.json({id: result.insertId, nombre, apellido, edad, carrera});
    }
    catch(err){
        res.status(500).json({"message": err.message});
    }
}

//Update the data from a student
export const updateStudent = async (req, res)=>{
    try{
        const {nombre, apellido, edad, carrera} = req.body;
        const { id} = req.params;
        const [result] = await pool.query(`UPDATE Estudiantes SET Nombre = ?, Apellido = ?, Edad = ?, Carrera = ? WHERE Id = ?`, [
            nombre, apellido, edad, carrera, id
        ]);
        if(!result.affectedRows) return res.status(404).json({"message": `Error al actualizar los datos del estudiante ${id}`});
        res.json({id, nombre, apellido, edad, carrera});
    }
    catch(err){
        res.status(500).json({"message": err.message});
    }
}

//Delete a student

export const deleteStudent = async(req, res)=>{
    try{
        const {id} = req.params;
        const [result] = await pool.query(`DELETE FROM Estudiantes WHERE Id = ?`, [id]);        
        if(!result.affectedRows) return res.status(404).json({"message": `Error al eliminar al estudiante con ID ${id}`});
        res.json({"message": `Estudiante Eliminado (${id})`});
    }
    catch(err){
        res.status(500).json({"message": err.message});
    }
}

//Get a student

export const getStudent = async(req, res)=>{
    try{
        const {id} = req.params;
        const [result] = await pool.query(`SELECT * FROM Estudiantes WHERE Id = ?`, [id]);
        if(!result.length) return res.status(404).json({"message": `El estudiante de Id ${id} no existe`});
        res.json(result[0]);
    }
    catch(err){
        res.status(500).json({"message": err.message});
    }
}
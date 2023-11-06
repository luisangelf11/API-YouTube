import {Router} from 'express'
import {getStudents, createStudent, updateStudent, deleteStudent, getStudent} from '../controllers/student.controllers.js'

const router = Router();

//Get All students
router.get('/api/v1/student', getStudents);

//Get a student
router.get('/api/v1/student/:id', getStudent);

//POST
router.post('/api/v1/student', createStudent);

//PUT
router.put('/api/v1/student/:id', updateStudent);

//DELETE
router.delete('/api/v1/student/:id', deleteStudent);

export default router;
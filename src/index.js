import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import routerStudent from './routes/students.routes.js';

//Inicializacion
const app = express();

//Configuraciones
app.set('PORT', 3000);

//Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//Rutas
app.use(routerStudent);

//Correr sevrer
app.listen(app.get('PORT'), ()=>{
    console.log(`El server se está ejecutando en el puerto ${app.get('PORT')}`);
});
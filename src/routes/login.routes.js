import { Router } from "express";
import {eliminarSesion, getToken, setSesion, updateSesion, getUser} from '../controllers/login.controllers.js'

const router = Router()

router.get('/token', getToken);

router.get('/login/:id', getUser)

router.post('/login', setSesion)

router.put('/login/:id', updateSesion)

router.delete('/login/:id', eliminarSesion)

export default router
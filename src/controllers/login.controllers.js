import {getConnection} from '../database/connection.js'
import sql from 'mssql'

export const getToken = async(req, res) =>{
    res.send("Get Token:")
}

export const setToken = async (req, res) =>{
    const pool = await getConnection()
    const result = await pool.request().query('SELECT * FROM tbc_Usuario')
    console.log(result)
    res.json(result.recordset)
}
export const getUser = async (req, res) =>{
    const pool = await getConnection()    
    const result = await pool.request()
    .input('id', sql.Int, req.params.id)
    .query('SELECT * FROM tbc_Usuario WHERE id=@id')
    if(result.rowsAffected[0] === 0){
        return res.status(404).json({message:"No encontrado"});
    }
    console.log("Consulta Exitosa")
    res.json(result.recordset[0])
}
export const setSesion = async (req, res) =>{
    console.log(req.body)
    const pool = await getConnection()
    const result = await pool.request()
    .input('usuario', sql.VarChar, req.body.usuario)
    .input('password', sql.VarChar, req.body.password)
    .input('nombre', sql.VarChar, req.body.nombre)
    .input('status', sql.NChar, req.body.status)
    .query('INSERT INTO tbc_Usuario(usuario, password, nombre, status) VALUES (@usuario, @password, @nombre, @status); SELECT SCOPE_IDENTITY() AS id;')
    console.log(result)
    res.json({
        id:result.recordset[0].id,
        usuario: req.body.usuario,
        nombre: req.body.nombre
    })
}
export const updateSesion = (req, res) =>{
    res.send("Sesion Actualizada:")
}
export const eliminarSesion = (req, res) =>{
    res.send("Sesion Eliminada:")
}



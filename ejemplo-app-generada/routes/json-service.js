var express = require('express');
var router = express.Router();
var modeloUsuario=require('../models/usuario');
var response=require('../dao/basic_response');
var Usuario=modeloUsuario.Usuario;
router.use(express.json());
router.post("/",(req,resp)=>{
    var request=req.body;
    var result= Usuario.agregarUsuario(request.nombreUsuario,request.apellidoPaterno,request.balance)
    result.then(result=>{
        resp.status(201);
        resp.json(result);
    }).catch(error=>{
        response.mensaje="Ocurrio un error al dar de alta";
        resp.status(500);
        resp.json(response);
    });
});
router.get("/",(req,resp)=>{
    const id=req.query.id;
    var result=Usuario.buscarPorId(id);
    result.then(result=>{
        if(result==null){
            resp.status(404);
            response.mensaje="Usuario no encontrado";
            resp.json(response);
        }else{
            resp.status(200);
            resp.json(result);
        }
    }).catch(error=>{
        console.log(error);
        response.mensaje="Ocurrio un error al realizar la busqueda";
        resp.status(500);
        resp.json(response);
    });
});
router.delete("/",(req,resp)=>{
    const id=req.query.id;
    var result=Usuario.borrarPorId(id);
    result.then(result=>{
            resp.status(204);
    }).catch(error=>{
        console.log(error);
        response.mensaje="Ocurrio un error al realizar la busqueda";
        resp.status(500);
        resp.json(response);
    });
})
router.patch("/",(req,resp)=>{
    var request=req.body;
    var result=Usuario.actualizarUsuario(request.id,request.nombreUsuario,request.apellidoPaterno,request.balance);
    result.then(result=>{
        resp.status(200);
        resp.json(result);
    }).catch(error=>{
        response.mensaje="Ocurrio un error al actualizar";
        resp.status(500);
        resp.json(response);
    });
})
 
module.exports=router;
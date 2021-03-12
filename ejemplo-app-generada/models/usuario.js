const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/Usuarios',
{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});
const Schema=mongoose.Schema;
const ObjectId=Schema.ObjectId;
const UsuarioSchema=new Schema({
    id: ObjectId,
    nombreUsuario: String,
    apellidoPaterno:String,
    balance:Number
});
 UsuarioSchema.statics.agregarUsuario=  function( nombreUsuario,apellidoPaterno,balance){
    var usuario=new Usuario()
    usuario.nombreUsuario=nombreUsuario;
    usuario.apellidoPaterno=apellidoPaterno;
    usuario.balance=balance;
    return  usuario.save();
    
}
UsuarioSchema.statics.buscarPorId=function(id){
    return Usuario.findById(id);
}
UsuarioSchema.statics.borrarPorId=function(id){
    return Usuario.findByIdAndDelete(id);
}
UsuarioSchema.statics.actualizarUsuario=function(id,nombreUsuario,apellidoPaterno,balance){
    return Usuario.update({nombreUsuario:nombreUsuario,apellidoPaterno:apellidoPaterno,balance:balance}).where({_id:id});
}
var Usuario= mongoose.model('usuarios',UsuarioSchema);
exports.Usuario=Usuario;
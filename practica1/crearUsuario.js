const leerLinea=require("readline");

const interfazconsola = leerLinea.createInterface({
    Input  :process.stdin,
    output : procces.stdout
} );
exports.interfazconsola = interfazconsola;


interfazconsola.question("por favor ingresar su nombre completo", (nombre)=> {
    if(nombre.length< 3 ){
        console.log("porfavor ingrese un numero valido de almenos 3 caracteres");
        interfazconsola.close();
        return;

    }
    interfazconsola.question("por favor ingrese su correo :", (correo)=>{
        if(!correo.includes("@")){
            console.log("porfavor ingrese un correo valido");
            interfazconsola.close();
            return;
        }

        interfazconsola.question("porfavr ingrese la contraseña:", (password)=>{
            if(password.length < 8){
                console.log("La contraseña debe ser mayor a 8 caracteres");
                interfazconsola.close()
                    return;

                

            }

            console.log("usuario creado exitosamente");
            console.log(`nombre: ${nombre}\ncorreo: ${correo}\npassword: ${password}`);
            interfazconsola.close()
            return;
        })
    })

})
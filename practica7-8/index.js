 const { createSecureServer } = require("http2");
const consoleInterface = require("./console.service");
const createDatabase = require("./create.db.service"); 
const { setTimeout } = require("timers/promises");
const{v4:uuid}=require("uuid");
const updateUsers = require("./uptdate.user.service");
const deleteUserByid = require("./delete.user.service");
const showUsers = require("./show.user.service");


const main = () => {
    try {
        consoleInterface.question("Por favor ingrese una opción\n1 - Crear base de datos\n2 - Crear un Usuario\n3 - Actualizar usuario mediante su ID\n4 - Eliminar un usuario por ID\n5 - Ver todos los usuarios", (option) => {
            switch (parseInt(option)) {
                case 1:
                    createDatabase();
                    setTimeout(()=>{
                        
                        main()
                    
                    },5000)
                    break;
                case 2:

                consoleInterface.question ("porfavor Ingresa tu nombre : ", (nombre)=>{
                    consoleInterface.question("porfavor ingrese su apellido :",(apellido)=>{
                        consoleInterface.question("por favor ingrese su dui ",(dui)=>{
                            consoleInterface.question("por favor ingrese su correo electronico :",(correo)=>{

                                const newUser={
                                    id:uuid(),
                                    name : nombre,
                                    lastname : apellido,
                                    dui:  dui,
                                    correo : correo
                                }
                                createUser(newUser)
                                setTimeout(()=>{
                        
                                    main()
                                
                                },5000)
                            })
                        })
                    })
                })

               

                    create
                    break;
                case 3:
                   consoleInterface.question("por favor ingrese el id del usuario a actualizar",(id)=>{
                    consoleInterface.question("por favor ingresa el nombre ", (nombre )=>{
                        consoleInterface.question("por favor ingresa el apellido",(apellido)=>{
                            consoleInterface.question("porfavor igresa tu dui",(dui)=>{
                                consoleInterface.question("porfavor ingresa t correo",(correo)=>{
                                   
                                    const newData={
                                        
                                        name : nombre,
                                        lastname : apellido,
                                        dui:  dui,
                                        correo : correo
                                    }
                                    updateUsers(id,newData) 
                                
                                setTimeout(()=>{
                        
                                    main()
                                
                                },5000)
                                })
                            })
                        })
                    })
                   })
                    break;
                    case 4:
                       consoleInterface.question("porfavor ingese el id del usuario que quiere borrar",(id)=>{
                        deleteUserByid(id)

                        setTimeout(()=>{
                            main()
                        },5000)
                        })
                        break;
                        case 5:
                            showUsers()
                            setTimeout(()=>{
                                main()
                            },5000)

                        break;
                default:
                    console.log("Opción no válida");
                    break;
            }
        });
    } catch (error) {
        throw new Error(`${error}`);
    }
};




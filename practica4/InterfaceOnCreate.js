const LeerLinea=require("readline")
const vehicleOnCreate=require(",/vehicleservice")
const interfazConsola = LeerLinea.createInterface({
    input : process.stdin,
    output:process.stdout})

    interfazConsola.question("Porfavor Ingrese el modelo del vehiculo",(model)=>{
        interfazConsola.question("Porfavor Ingrese el color del vehiculo",(color) => {
        interfazConsola.question("Porfavor Ingrese el año del vehiculo",(year)=>{
            interfazConsola.question("Porfavor Ingrese el estado del vehiculo",(isFuncional)=>{  
                interfazConsola.question("Porfavor Ingrese la marca del vehiculo",(brand)=>{
                
                console.log (vehicleOnCreate(model,color,year,isFuncional));
            
                })
                })
            })

    })
        

        
    })

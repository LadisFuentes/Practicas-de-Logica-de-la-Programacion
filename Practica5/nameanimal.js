const leerLinea=require("readline")

const InterfazConsola=leerLinea.createInterface({
input: process.stdin,
output:procces.stduot

})
InterfazConsola.questionc("Porfavor ingrese el nombre del animal",(name)=>{
InterfazConsola.question("porfavor Ingrese la edad del animal",(age)=>{
    InterfazConsola.question("Porfavor ingrese el color del animal",(color)=>{
        InterfazConsola.question("Porfavor ingrese la raza",(race)=>{
          Animalfactory(name,age,color,race)  
        })
    })
})


})
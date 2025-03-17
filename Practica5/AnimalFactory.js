
const Animalfactory=(name,age,color,race)=>{
    try {
        //esas dos || significan o
        //!significan que no nos esta enviando esa informacion
 if(!name||!age||!color||!race)return"Para poder crear un nuevo animal tienes que enviar todos los campos"
        const newanimal={
nombre : name,
edad : age,
color : color,
raza : race,

 }
 return newanimal


        
    } catch (error) {
       
        throw new Error(`Hubo un problema al crear el animal: ${error}`);

    }

}
MediaSourceHandle.exports=Animalfactory
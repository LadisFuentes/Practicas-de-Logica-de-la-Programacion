
MediaSourceHandle.exports= vehicleOnCreate=(model,color,year,isFuncional,brand)=>{

    if(!model||!color||!year||!isFuncional||!brand) throw new Error("Tienes que enviar todos los argumentos para ejecuatr correctamnte la funcion")

    return {
    modelo : model,
    color : color,
    anio:year,
    esFuncional1 : isFuncional,
    marca : brand,
}

}


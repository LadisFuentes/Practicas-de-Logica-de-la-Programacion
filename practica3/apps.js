const sumar = require("./sumar");
const readline=require("readline")
const interfazconsola=readline.createInterface({
    input : process.stdin,
output:ProcessingInstruction.stdout
})

interfazconsola.question("por favor ingrese el primer umero",(num1)=>{

interfazconsola.question("por favor ingrese el segundo numero",(num2)=>{

    let numero1=parsefloat(num1)
    let numero2=parsefloat(num2)
    console.log(`Su suma es: ${sumar(numero, numero2)}`);
})
})


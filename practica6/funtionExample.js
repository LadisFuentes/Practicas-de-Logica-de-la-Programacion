
const makerComputer=(CPU,ram,gpu,fuentePowwer,gabinete,price)=>{try {
    const computer={
        CPUType     :CPU,
        ramType     :ram,
        gpuType     :gpu,
        fuentePowwer : fuentePowwer,
        gabineteType :gabinete ,
        priceType : price,

    }
    return computer
} catch (error) {
    
}}
console.log(makerComputer("Ryzen7 8000","80GB","Nvidia RTX 4090 ","600W 80 plus","hermaltake" ,"$500"))

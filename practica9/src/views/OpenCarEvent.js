export const openCarEvent=()=>{
try {
    
    const openCart=document.getElementById('opencart')
    console.log(openCart)
    openCart.addEventListener("click",()=>{
        const modalEvent= document.getElementById('modalCart')
        
        modalEvent.classList='open-cart'


    })

    const closemodal=document.getElementById('close-modal')

    closemodal.addEventListener('click', ()=>{
         const modalEvent=document.getElementById('modalCart')
       
         modalEvent.classList= 'close-cart'
    })
} catch (error) {
    throw new Error(`${error}`)
    
}

}
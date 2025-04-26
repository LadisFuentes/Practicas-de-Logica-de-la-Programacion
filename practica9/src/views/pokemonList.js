import axios from "axios";
import { apiHttpClient } from "../axiosClient";

export const getAllPokemons = async()=>{
    try {
         const response = await apiHttpClient.get()
      
      return response.data.results
    } catch (error) {
        throw new Error(`${error}`);
        
    }
}

export const createPokemosnList = async()=>{
    try {
        const pokemons=await getAllPokemons()
        pokemons.forEach(async(element) => {
          console.log(element.name) ;
          console.log(element.url) ;
          const response = await axios.get(element.url)
          console.log(response.data.sprites.other["official-artwork"].front_shiny);
          
          let imagen = response.data.sprites.other["official-artwork"].front_shiny

          const application = document.querySelector("#app")

          const containerPokemon = document.createElement("div")
          containerPokemon.className="container-pokemon" 
          containerPokemon.innerHTML=` 
          <p>${element.name}<p/>
          <img src="${imagen}"height="200px" />
          <button>agregar al carrito </button>
          `



          application.append(containerPokemon)
          
          
          
          
          


        });



     console.log(getAllPokemons());


        
    } catch (error) {
        
    }
}
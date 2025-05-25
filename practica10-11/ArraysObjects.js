
const ListaDePersonas = [
    { name : "Ladis",
        correo :"Ladis2023@gmail.com"

    },

    { name : "Juan",
        correo :"1999Juan@gmail.com"

    },

    { name : "Lourdes",
        correo :"Lourdesf2000@gmail.com"

    },

    { name : "Alicia",
        correo:"2020Alicia@gmail.com"

    }
]

ListaDePersonas.forEach(persona => {
    console.log(persona.name);
    console.log(persona.correo);
})

const ListPerson = [
    {name : "Alexa",
        age : 16
    }
    ,
    {name : "Messi",
        age : 37
    }
    ,
    {name : "Alberto",
        age : 17
    },

    {name : "Juan",
        age : 16
    }
]



let app = document.getElementById("app")

ListPerson.forEach(person => {
    const persona = document.createElement("div")   
    
    persona.innerHTML =`
    <p>${person.name}</p>
    <p>${person.age}</p>
    `
    
    
    
    app.appendChild(persona)
    
})



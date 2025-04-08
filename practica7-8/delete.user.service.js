
const { ifError } = require("assert");
const fs=require("fs");

costmongo:":/mongo.json"

const deleteUserByid=(id)=>{
    try {
        fs.readFile(mongoDBdule, "utf-8",(error,data)=>{
            if(error) throw new Error (`${error}`);

         const deleteUser =JSON.parse(data)

       

         const userDel=delecteUser.users.filter(user=>user.id !==id)
         if(userDel=>1){
            console.log(deleteUser);
         
        }
        const newData = {
            users : {
                users : userDel

        }
        }
        console.log(newData);
       fs.writeFile(mongo, JSON.stringify(newData, null,2),(error)=>{
        if(error) throw new Error(`${error}`);
       })
        })
        
    } catch (error) {
        
    }
}

module.exports =deleteUserByid
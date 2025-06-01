function walk(){
   return new Promise((resolve, reject) =>{
    setTimeout(()=>{
         const dogWalked="true";

            if(dogWalked){
               resolve("You walked the dog");
            }
            else{
                reject("you didnt");
            }
        
    }, 1000);
})
}

function cleanKitchen(){
   
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
          const cleaned="true";

            if(cleaned){
               resolve("You cleaned the kitchen");
            }
            else{
                reject("you didnt clean it");
            }
        
    }, 2500);
    })
}

function trash(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            
            const trashOut=false;

            if(trashOut){
               resolve("You take out the trash.");
            }
            else{
                reject("you didnt");
            }
        
    }, 500);
})
}

walk().then(value => {console.log(value); return cleanKitchen()})
      .then(value => {console.log(value); return trash()})
      .then(value => {console.log(value); console.log("finished")})
      .catch(error => {console.error("An error occurred:", error)});
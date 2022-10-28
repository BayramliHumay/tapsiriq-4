const name = ["lale","sevil","gunay","nezrin"];
function reverseArray(){
    let arr = name.reverse();
    return arr
}
console.log(reverseArray(name));



//2ci
const aliens = ["lale","sevil","gunay","nezrin"];
function greetAliens(aliens){
    console.log( `Oh powerful ${aliens [0]}, we humans offer our unconditional surrender!`)
    console.log( `Oh powerful ${aliens [1]}, we humans offer our unconditional surrender!`)
    console.log( `Oh powerful ${aliens [2]}, we humans offer our unconditional surrender!`)
    console.log( `Oh powerful ${aliens [3]}, we humans offer our unconditional surrender!`)
}
greetAliens(aliens);


 //3 cu

 const coolStuff = [
    'lale',
   'sevil',
   'gunay',
   'nezrin',
];
  const myStuff = [
    'lale',
    'Gence',
    'gunay',
    'Agsu',
];
  function  justCoolStuff (coolStuff,myStuff) {
    coolStuff.forEach((item)=>{
         myStuff.forEach((element)=>{
            if(item==element){
                console.log(item)
            }
         })
    });


  }
  
  
 justCoolStuff(coolStuff,myStuff)
  

 //4 cu
 const meal = [
    { name: 'arugula', source: 'plant' },
    { name: 'tomatoes', source: 'plant'},
    { name: 'lemon', source: 'plant' },
    { name: 'olive oil', source: 'plant' },
  ];
  const dinner = [
    { name: 'hamburger', source: 'meat' },
    { name: 'cheese', source: 'dairy'},
    { name: 'ketchup', source: 'plant' },
    { name: 'bun', source: 'plant' }
  ];
  function  isTheDinnerVegan (arr) {
    for (let i = 0; i < arr.length;i++){
        if (arr[i].source !== 'meat' && arr[i].source!=='dairy'){
            return false
        }
        else{
            return true 
        }
    }
            }
            console.log(isTheDinnerVegan(meal));
            console.log(isTheDinnerVegan(dinner));
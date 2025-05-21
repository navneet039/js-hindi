// switch (key){
//     case value:
//         break;
//     case value2:
//         break;
//     default:
//         break;
    
// }


const month = 1;

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid month");
}


//truthy values --> "0" , 'false'," ",[],{},function(){}
//falsy values---> false  , 0, -0,BigInt 0n,null,undefined,NaN,""
const useremail="navneet@gmail.com"
if(useremail){
    console.log("user got email")
}
else{
    console.log("donot have user email")
}

const emptyobj={}
if(Object.keys(emptyobj).length===0){
    console.log("obj is empty")
}
//false==0  true 
//false=="" true
//0==""  true

//Nullish Coalescing operator(??):null undefined

let val1;
// val1=5??10
// val1=null??10
// val1=undefined??15
val1=null ?? 10 ??20
console.log(val1)



//terniary operator

// condition ? true : false
const iceTeaprice=100
iceTeaprice<=80 ? console.log("less than 80 "):console.log("more than 80")

//if
const isuserloggedin=true
const temp=41
if(temp<50){
    console.log("yes less than 50");
}
else{
    console.log("no greater than 50")
}
if(2=="2"){
    console.log("executed")
}
const score=200
if(score>100){
    const power="fly"
    console.log(`user power: ${power}`)
}


const balance=1000
if(balance>500) console.log("test")

// if(balance<500){
//     console.log("less than 500")

// }
// else if(balance<750){
//     console.log("less than 750")
// }
// else{
//     console.log("less than 1200")
// }


const userloggedin = true;
const debitCard = true;
const loggedinfromgogle=false
const loggedinfromemail=true

if (userloggedin && debitCard) {
    console.log("yes you can buy");
}
if(userloggedinfromgogle || loggedinfromemail){
    console.log("user logged in")
}


function saymyname(){
   console.log("navneet kumar")
}
//saymyname---->this is reference
saymyname()//this is calling function

function add_numbers(number1,number2){//-->yha parameters
    return number1+number2
}
let finalval=add_numbers(3,"a")//function call me value pass -->arguments
console.log(finalval)

function userloginmessage(username="sam"){//if no value passed then sam 
    if (!username){
        console.log("please enter a user name")
        return
    }
    return `${username} just logged in`
}
let str=userloginmessage("navneet")
console.log(str)
let str1=userloginmessage()//--->if no value passed undefined
console.log(str1)





function calculateCartPrice(val1,val2,...num1){//rest and spread operator
    return num1

}

console.log(calculateCartPrice(200,300,400,500,677,899))

const user={
    username:"navneet",
    price:199
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleobject(user)
handleobject({
    username:"nav",
    price:999
})


const mynewarray=[200,300,400,500]

function returnvalue(getarray){
    return getarray[2]
}

console.log(returnvalue(mynewarray))

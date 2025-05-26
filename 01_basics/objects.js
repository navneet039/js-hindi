// Singleton: If created using a constructor (like new Object()), 
// we can control it to be a singleton — a single instance.

// Literal: When using object literals ({ }), it is NOT a singleton. 
// Each time you write {}, it creates a new object.



//Object.create--->constructor
const mysym=Symbol("key1")
const jsuser={
    name:"navneet",
    "fullname":"navneet kumar",
    [mysym]:"mykey1",
    age:21,
    loctaion:"jehanabad",
    email:"navneet@google.com",
    isloggedin:false,
    lastlogindays:["Monday","Tuesday"]

}
console.log(jsuser.email)
// console.log(jsuser.fullname)---->cannot access like this
console.log(jsuser["fullname"])
console.log(jsuser["email"])
console.log(typeof mysym)
console.log(typeof jsuser[mysym])//string it is not being used as symbol so use square bracket


jsuser.email="navneet@chatgapt.com"

// Object.freeze(jsuser)//iske lgane k bad object me koi change nhi hoga
console.log(jsuser)

jsuser.greeting=function(){
    console.log("hello js users")
}
jsuser.greeting2=function(){
    console.log(`hello js user ${this.name}`)
}

console.log(jsuser.greeting())
console.log(jsuser.greeting)//function return back function execute nhi hua
console.log(jsuser.greeting2())
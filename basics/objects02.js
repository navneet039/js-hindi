const tinderuser=new Object()
tinderuser.id="123abc"
tinderuser.name="sammy"
tinderuser.isloggedin=false
console.log(tinderuser)

const regularuser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"navneet",
            lastname:"kumar"
        }
    }
}
console.log(regularuser.fullname?.userfullname.lastname)//quesmark if exists

const obj1={
    1:"a",
    2:"b",
    3:"c"
}
const obj2={
    4:"d",
    5:"e",
    6:"f"
}
const obj4={
    7:"g"
}
// const obj3=Object.assign({},obj1,obj2,obj4)//target--->source
const obj3={...obj1,...obj2}
console.log(obj3)

//array of objects

const users=[
    {
        id:1,
        email:"h@gmail.com",

    },
    {
        id:2,
        email:"n@gmail.com"
    }
]

console.log(users[1].email)

console.log(tinderuser)
console.log(Object.keys(tinderuser))//datatype array
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))

console.log(tinderuser.hasOwnProperty('isloggedin'))





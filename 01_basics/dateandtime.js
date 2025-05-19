//dates

let  mydate=new Date()
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toJSON())
console.log(mydate.toISOString())
console.log(mydate.toLocaleString())
console.log(typeof mydate )//object

let mycreatedate=new Date(2025,0,19,5,3)
console.log(mycreatedate.toDateString())
console.log(mycreatedate.toLocaleString())
let newdate=new Date("02-19-2004")
console.log(newdate.toDateString())


let mytimestamp=Date.now()
console.log(mytimestamp)
console.log(newdate.getTime())


console.log(Math.floor(Date.now()/1000))
console.log(newdate.getDay())
console.log(newdate.getMonth()+1)

newdate.toLocaleString('default',{
    weekday:"long"
})






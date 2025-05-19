//array  -->type object--->indexing 0 se

//shallow copy ---->means  acopy whose property share the same references (point to the same underlying value)
//as those of the source object from which copy has beeon made

//deep copy --->does not share the same refrences
const myarray=[0,1,2,2,4,5,true]
const myheros=["shaktiman","nagraj"]
const myarray2=new Array(1,2,3,4)
console.log(myarray[0])

//array k methods
console.log(myarray.length)

myarray.push(6)//last me add
console.log(myarray)
myarray.pop()//removes one element
console.log(myarray)

myarray.unshift(9)//start me add
console.log(myarray)

myarray.shift()//start se remove
console.log(myarray)

console.log(myarray.includes(9))
console.log(myarray.indexOf(9))//if not exist -1

const newarray=myarray.join()
console.log(newarray)
console.log(typeof newarray)//string comma seperated

//slice aur splice

console.log("A",myarray)

const myarr1=myarray.slice(1,3)
console.log(myarr1)
console.log("B",myarray)



//array.splice(start, deleteCount, item1, item2, ...)

//start: Index at which to start changing the array.
//deleteCount: (Optional) Number of elements to remove.
//item1, item2, ...: (Optional) Elements to add to the array at the start index

const myarr2=myarray.splice(1,3)
console.log(myarr2)
console.log("C",myarray)


const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]
// marvel_heros.push(dc_heros)

// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

let combined = marvel_heros.concat(dc_heros);//conacat does not changes the orignal array while push does 
//conacat return a combine array so you mush store it 

console.log(combined);       
console.log(marvel_heros);


//spread operator

const allheros=[...marvel_heros,...dc_heros];
console.log(allheros);

const anotherarray=[1,2,3,[4,5,6],7,[6,7,[4,5]]];

let usablearray=anotherarray.flat(Infinity)//multiple nested layer ko ek array of depth 1 me convert argument is depth

console.log(usablearray)



console.log(Array.isArray("navneet"))
console.log(Array.from("navneet"))//makes it into array

console.log(Array.from({name:"navneet"}))//intersting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))










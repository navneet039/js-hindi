//for of loop--->array 

const arr=[1,2,3,4,5]
for (val of arr){
    console.log(`val is  ${val}`)
}

const  str="navneet"
for (char of str){
    console.log(`character is ${char}`)
}
//maps

const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('IN',"India")

console.log(map)

for (key of map){
    console.log(key)
}
for ([key,value] of map){//destructure ho gya
    console.log(key,value)
}


// const myobj={
//     'Game1':'NFS',
//     'Game2':'spiderman'
// }
//object is not iterable like this
// for([key,val] of myobj){
//     console.log(key,"->  ",val)
// }


const myobject={
    js:"javascript",
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}

for (key in myobject){
    console.log(`${key} :  shortcut is for ${myobject[key]}`)
}


const programming=['js','rb','py']
for(const val in programming){
    console.log(val)// 0 1 2 keys aa jata hai array i keys 0 1 2 .....
    console.log(programming[val])
}

//ye wla map pe nhi chalega in 





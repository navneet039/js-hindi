//for each loop
const coding=["js","c++","java"]
//coding.forEach(function(){})
// coding.forEach( function(item){
//     console.log(item)

// })

// coding.forEach((item)=>{console.log(item)});

function printme(item){
    console.log(item);
}
coding.forEach(printme)


coding.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})

const mycoding=[
    {
        langname:'javascript',
        langfilename:'js'

    },
    {
        langname:'python',
        langfilename:'py'
    },
    {
        langname:'c++',
        langfilename:'cpp'
    }
]


mycoding.forEach((item)=>{
    console.log(`${item.langname} ---> ${item.langfilename}`)
})


//reduce

const mynums=[1,2,3,4]

const initialval=0

// const mytotal=mynums.reduce((acc,currval)=>{
//     console.log(`accumulator value${acc}  and currentval is ${currval}`)
//    return acc+currval},initialval)
// console.log(mytotal)

const myprod=mynums.reduce((acc,currentval)=> acc*currentval,1)
console.log(myprod)


const shoppingcart=[
    {
         itemname:'js course',
         price:2999
    },
   {
        itemname:'c++ course',
        price:1999
   },{
    itemname:'python course',
        price:1969
   },
   {
    itemname:'Matlab course',
        price:199
   }
]

const totalfee=shoppingcart.reduce((acc,item)=>acc+item.price,0)
console.log(totalfee)
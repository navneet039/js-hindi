const coding=["js","c++","java","python","Matlab"]
const values=coding.forEach((item)=>{
    console.log(item)
})
console.log(values)//undefined--->ye koi value return nhi karta

const mynums=[1,2,3,4,5,6,7,8,9,10]

const extracted_no=mynums.filter((item)=>item %2==0)//jo jo condition satisfy karega wo return hoga
console.log(extracted_no)

const extracted_no1=mynums.filter((item)=>{return item >=4})
console.log(extracted_no1)

const newnums=[]
mynums.forEach((num)=>{
    if(num>4){
        newnums.push(num)
    }

})
console.log(newnums)


const books = [
    {
        name: "To Kill a Mockingbird",
        genre: "Fiction",
        publish: 1960,
        edition: "First"
    },
    {
        name: "The Catcher in the Rye",
        genre: "Fiction",
        publish: 1951,
        edition: "Second"
    },
    {
        name: "1984",
        genre: "Dystopian",
        publish: 1949,
        edition: "First"
    },
    {
        name: "Brave New World",
        genre: "Dystopian",
        publish: 1932,
        edition: "Third"
    },
    {
        name: "The Hobbit",
        genre: "Fantasy",
        publish: 1937,
        edition: "Fourth"
    },
    {
        name: "Harry Potter and the Sorcerer's Stone",
        genre: "Fantasy",
        publish: 1997,
        edition: "First"
    },
    {
        name: "The Name of the Wind",
        genre: "Fantasy",
        publish: 2007,
        edition: "First"
    },
    {
        name: "Sapiens: A Brief History of Humankind",
        genre: "Non-Fiction",
        publish: 2011,
        edition: "First"
    },
    {
        name: "Educated",
        genre: "Non-Fiction",
        publish: 2018,
        edition: "First"
    },
    {
        name: "The Great Gatsby",
        genre: "Classic",
        publish: 1925,
        edition: "Third"
    },
    {
        name: "Pride and Prejudice",
        genre: "Classic",
        publish: 1813,
        edition: "Second"
    }
];

const userbooks=books.filter((bk)=>bk.genre==='Fiction')
console.log(userbooks)
const userBooks=books.filter((bk)=>bk.publish>=1899)
console.log(userBooks)
const reqbook=books.filter((bk)=>bk.genre=='Fiction' && bk.publish>=1900)
console.log(reqbook)







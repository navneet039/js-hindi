//for

for(let i=1;i<=10;i++){
    console.log(i)
}

for(let i=0;i<=10;i++){
    console.log(`outer loop value : ${i}`)
    for(let j=1;j<=10;j++){
        console.log(`inner loop value:  ${j} and inner loop :  ${i}`)
    }
}


//break and continue

for(let i=1;i<=20;i++){
    if(i==5){
        console.log("5 is best number ");
        break;
    }
    console.log(`value of i is ${i}`)
}
for(let i=1;i<=20;i++){
    if(i==5){
        console.log("5 is best number ");
        continue;
    }
    console.log(`value of i is ${i}`)
}




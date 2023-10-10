//1
let sum = 0;
for (let index = 1; index <=20; index++) {
    sum += index;
}
console.log(sum);

//2
for (let index = 1; index < 6; index++) {
     console.log(`There is ${index} bottle of beer on the wall`);
}

//3
for (let index = 0; index < 21; index++) {
    console.log( index%2===0? `${index} is even` : `${index} is odd`);
}

//4
for (let index = 0; index < 11; index++) {
    console.log( `${index} * 9 ist ${index*9}`);
}

for (let index = 1; index < 11; index++) {
    for (let index2 = 1; index2 < 11; index2++) {
        console.log( `${index}*${index2} = ${index*index2}`);
    }
}

//5
for (let index = 1; index <= 100; index++) { 
    if(index%3===0 && index%5===0) console.log("FizzBuzz"); 
    else if(index%3===0) console.log("Fizz");
    else if(index%5===0)console.log("Buzz");
}

//6
let sum2=0;
for (let index = 1; index < 1001; index++) { 
    if(index%3===0 && index%5===0) sum2+=index;
}
console.log(sum2);

//bonus
for (let index = 100; index < 1001; index+=100) { 
    console.log(index);
}

for (let index = 0; index < 11; index+=2) { 
    console.log(index);
}

for (let index = 3; index < 16; index+=3) { 
    console.log(index);
}

for (let index = 9; index >= 0; index--) { 
    console.log(index);
}


for (let index = 1; index < 5; index++) { 
    for (let index2 = 0; index2 < 3; index2++) { 
        console.log(index);
    }
}


for (let index = 0; index < 3; index++) { 
    for (let index2 = 0; index2 < 5; index2++) { 
        console.log(index2);
    }
}

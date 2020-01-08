function* colors(){
    yield 'blue';
    yield 'red';
    yield 'yellow';
}

const myColors=[];
for(let color of colors()){
    myColors.push(color);
}

console.log(myColors);
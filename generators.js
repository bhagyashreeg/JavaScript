function* shopping(){
    const itemsFromStore = yield 'cash';

    const itemsLaundry = yield 'laundry';
    return [itemsFromStore, itemsLaundry];
}

const gen = shopping();

console.log(gen.next(), "\n" , gen.next('groceries'), "\n", gen.next('clean cloths'));
//console.log(gen.next('groceries'));
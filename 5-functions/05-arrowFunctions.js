// Regular function
// function coffee() {
//     console.log('Coffee is life');
// }

// // Using Fat Arrow    () Function {}
// let coffee = () => {
//     console.log('Coffee is life');
// }

// coffee();


// var cats = (kitten, puppy) => {
//     console.log(`I have ${kitten} cat and ${puppy} dogs.`);
// }
// cats(1, 35);


// let fatArrow = (x) => console.log(x);
// fatArrow('This is a function, nothing to see');



let letter = 'word';

function upper(big) {
    return big.toUpperCase();
}

function lower(small) {
    return small.toLowerCase();
}

console.log(upper(lower(letter)))
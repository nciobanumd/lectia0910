
/*  EXERCITIU 5 */

const arr = [31, 41, 51, 61, 71, 81]

/* MAP */
console.log(arr.map((item, index, array) =>{
    console.log('element', item)
    console.log('idenx', index)
    console.log('array', array)

})) 


console.log(arr.map((item, index) => {
    return {
        count: item,
        index: index
    }
}))

/* Filter */
const cuvinte = ['cal', 'capra', 'magarus', 'tigru', 'elefant'];

const resultat = cuvinte.filter((cuvinte) => cuvinte.length > 5);

console.log(resultat);


const arr1 = arr.filter ((item, idx) => {
    console.log(idx, item)
    return idx > 2;
})

arr1.push(91)

console.log('arr', arr);
console.log('arr1', arr1);


/* IndexOF */
const idx1 = arr.indexOf(7)

console.log('arr', arr)
console.log('arr1', idx1)


/* FindIndex */
const idx = arr.findIndex((item) => {
    return item > 51
})

console.log('arr', idx);


/* EVERY */
const every = arr.every((item) => {
    return item > 0
})

console.log('arr', every);


/* SOME */
const some = arr.some((item) => {
    console.log(item)
    return item > 2
})

console.log('arr', some);

/* FLAT */
const arr2 = [1, [2, [3]], 4, [5]]

console.log('arr2', arr2.flat(2));


/* forEach */
arr.forEach((item, index) => {
    console.log('item', item);
    console.log('index', index)
    
})


/* FIND */
const found = arr.find((item) => {
        return item > 71
})

console.log('arr', arr);
console.log('found', found);


/* Concat */
const arr3 = [91, 101, 111]
const arr4 = arr3.concat(arr)

console.log('arr', arr);
console.log('arr3', arr3);
console.log('arr4', arr4);

/* spread Operator */
/* const arr3 = [91, 101, 111]
const arr4 = [...arr, ...arr3]

console.log('arr', arr);
console.log('arr3', arr3);
console.log('arr4', arr4); */

/* include */
console.log('includes:', arr.includes(71))
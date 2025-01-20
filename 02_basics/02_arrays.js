// --------->>    Arrays

const marvelHeros = [ "thor", "spiderman", "Ironman"];
const dcHeros = ["batman", "flash", "superman"];

// marvelHeros.push(dcHeros);
// console.log(marvelHeros)
// console.log(marvelHeros[3][1]) // flash

// const all_heros = marvelHeros.concat(dcHeros);
// console.log(all_heros)

// const all_new_heros = [...marvelHeros, ...dcHeros]  // !Improtant for concatinations
// console.log(all_new_heros)

const another_array = [ 1,2,3,4,5,[6,7,8,9,[1,2,3,]]]
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array)



////////////////////////////////
for (let a = 0; a<21; a++) {
  console.log(a, "easy going");
}
////////////////////////////////


////////////////////////////////
for (let a = 0; a<=200; a++){
  if ( a%2 === 0)
  console.log(a, "get even")
}
////////////////////////////////


////////////////////////////////
for (let a=0; a<=100; a++){
  if(a%3 ===0 && a%5 ===0){
    console.log(a, "fizzbuzz");
}else if(a%3 ===0){
    console.log(a,"fizz");
}else if(a%5 ===0){
    console.log(a,"buzz");
}
}
////////////////////////////////


////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

 plantee[2]= 5001
console.log(plantee);
wolfy[3] = "Gotham City"
console.log(wolfy)
           
dart.push("Hawkins");
console.log(dart)
wolfy.shift("Wolfy");
console.log(wolfy)
wolfy.unshift("Gameboy");
console.log(wolfy,"wild wild life answered")

////////////////////////////////


////////////////////////////////
const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael','Michaelangelo'];
console.log(ninjaTurtles)
 for(string of ninjaTurtles){
   console.log(string.toUpperCase());
 }
  
       
////////////////////////////////


////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log(favMovies[8])
console.log(favMovies.sort())
console.log(favMovies.pop())
favMovies.push ="Frozen"
console.log(favMovies)
console.log(favMovies.reverse())
favMovies.shift()
favMovies.unshift("yellow")
console.log(favMovies)
favMovies.splice(favMovies.indexOf('Django Unchained'), 2, "Avatar")
console.log(favMovies)
////////////////////////////////*/


////////////////////////////////
/*const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

whereIsWaldo.slice(1)

////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////*/
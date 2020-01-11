// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1
// Some data we can work with
const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 }
];
const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black, Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William"
];
// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const filter = inventors.filter(inventor =>
  inventor.year >= 1500 && inventor.year < 1600 ? true : false
);
//const filter = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600))

console.table(filter);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names

const maper = inventors.map(inventor => inventor.first + " " + inventor.last);
//const maper = inventors.map( inventor => `${inventor.first} ${inventor.last}` );

console.table(maper);


// 3. Sort the inventors by birthdate, oldest to youngest
// Array.prototype.sort()

//Ascending
const sorter = inventors.sort((a, b) => {
  return a.year - b.year;
});
//Decending
const revsorter = inventors.sort((a, b) => {
  return b.year - a.year;
});

console.table(sorter);
console.table(revsorter);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?

const reducer =  inventors.reduce((i,inventor)=> {
  return i + (inventor.passed -inventor.year);
}, 0);
console.log(reducer);
// 5. Sort the inventors by years lived

const yearLivedSorter = inventors.sort((a,b)=> (a.passed - a.year) - (b.passed-b.year));
console.table(yearLivedSorter);
console.log(yearLivedSorter.map(invento=> invento.passed - invento.year ));
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector('.mw-category');
// const bolveryards = category.querySelectorAll('a');
// const bolveryardArr = [...bolveryards] //nodeList to Array - use Array.from() or Array.protoype.slice.call()
// const listNames = bolveryardArr.map((bolvs)=>bolvs.text);
// const namesWithDe = listNames.filter((bolvs) => bolvs.includes('de'));

// 7. sort Exercise
// Sort the people alphabetically by last name

console.table(people.map((p)=> {
  const [lastname, firstname] = p.split(', ');
return lastname + " " +  firstname;
}).sort());



// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck"
];

const dataObj = data.reduce((obj, d)=> {
 obj.hasOwnProperty(d) ? obj[d]++ : obj[d]=1;
 return obj; //always return the object or value you passed
},{}); ; //dont do . operator it will create a property with d alwasy use square brackets :P //you should be knowing this

console.log(dataObj);

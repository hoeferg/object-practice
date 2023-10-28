let music = {
    woodwind: "sax",
    brass: "tuba",
    string: "bass",
    percussion: "xylophone"
}

let notes = ["whole", "half", "quarter", "eighth"]
let musicArr = [ "woodwind", "sax", "brass", "tuba",]
//-------------------------------------Objects-------------------------------------------------
//TODO: Object methods, Array Methods, Turn the second half of the object into an array.

for (const key in music) {
    music[key] = music[key] + 1
    console.log(`${music[key]}`)

    // const objToArr = Object.entries(music[key]);
    // console.log(objToArr);
}

//Object values to array
// array = Object.values(music)
// console.log(array);

//Object to Array
// const objToArr = Object.entries(music);
// console.log(objToArr);

// const arr =[music]
// console.log(arr)
// let emptyArrKey = [];
// let emptyArrValue = [];

// for (const key in music) {
//     emptyArrKey.push(key);
// }
// for (let i = 0; i < notes.length; i++) {
//     for (let j = 0; j < musicArr.length; j++) {
//         {music[notes[i]] = musicArr[j]}
//     }
// }
// console.log(music)
//This add to the object


// console.log(emptyArrKey);
// for (const values in music) {
//     emptyArrValue.push(values)
// }
// console.log(emptyArrValue);



// //Object to String
// const objToStr = JSON.stringify(music);
// console.log(objToStr);

// //for loop through Object
// for (const key in music) {
//     console.log(key)
// }
        ////we for loop through the keys of music

// //conditionals
// for (const entries in music) {
//     console.log(entries)
//     if (music[entries] === "sax") {
//         console.log("woodwinds are the best")
//     }
// }
//         //entries are the current property name (key) in the 'music' object.
//         //we for loop through the keys of music
//         //then we are checking if the current key in the music object is equal to the string sax

// //for loop
// for (const key in music) {
//     if (music[key] === "sax") {
//         console.log("woodwinds are the best")
//     } else {
//         console.log("small sound")
//     }
// }
//         //we for loop through the keys of music
//         //key represents the current property name within the music object
//         //then we are checking if the current key in the music object is equal to the string sax
//         //if the key is "sax" then return woodwinds are the best
//         //else if that is not the case return small sound

// //while loop
// let entryIndex = 0;
// const entries = Object.keys(music);
// while (entryIndex < entries.length) {
//     const currentEntry = entries[entryIndex];
//     if (music[currentEntry] === 'sax') {
//         console.log("Woodwinds are the best");
//     }
//     entryIndex++;
// }
//         //we are setting our entry index to 0
//         //we are setting entries to an array of key value pairs
//         //while the entryIndex is less then the entries length iterate through the array
//         //we are setting the value from the key value pairs in the array to currentEntry
//         //if the current entry of the array music is equal to the string sax return woodwinds are the best
//         //if this condition is not meet increase the entry index by 1
//         //this function will keep running until we find the value of key in the array that is equal to the string sax

// //do loop
// let entryIndex = 0;
// const entries = Object.keys(music);
// console.log(entries);
// do {
//     entryIndex++
//     console.log(entryIndex)
// }
// while (entryIndex < entries.length)
    //we are setting the entry index to 0
    //we are setting entries to an array of key value pairs
    //we make sure the code inside the loop is ran at least once and then we check if the entryIndex is smaller the entries.length
  //if it is then we run the code again and check the condition again until the condition is no longer meet

// //for each loop
// const values = Object.values(music);

// values.forEach((entry) => {
//     if (entry !== 'sax') {
//         console.log("This is not a woodwind");
//     } else {
//         console.log("This is a woodwind")
//     }
// });
//     //we first get an array of key value pairs from the music object
//     //we then iterate through these pairs
//     //then we check if the value is not equal to sax
//     //if it is them we print This is not a woodwind
//     //if it is them we print This is a woodwind

//go through other object methods
// ------------------------------------------------array------------------------------------------
// //array to object
// let notesObj = {notes} 
// console.log(notesObj);
//         //this returns { notes: [ 'whole', 'half', 'quarter', 'eighth' ] }
//         //an object with an array in it
// let otherNotesObj = Object.assign({}, [...notes])
// console.log(otherNotesObj);
//         //this returns { '0': 'whole', '1': 'half', '2': 'quarter', '3': 'eighth' }
//         // an object

// //while loop
// let i = 0;
// while (i < notes.length) {
//     if (notes[i] === "whole") {
//         console.log("thats one long note")
//     }
//     i++
// }
//         //we will iterate through the entire loop as there is no current way to stop it

//do loop
// let i = 0
// do {
//     console.log(notes[i])
//     i++
// } while( i < notes.length)

//         //set i = 0
//         //the first time through console.log notes[i]
//         //then increase i by 1
//         //then check if i is less then notes.length after console logging each note

// //for each loop
// notes.forEach((element) => console.log(element));
//         // this will return all the elements within the array

// //for loop
// for (let i = 0; i < notes.length; i++) {
//     console.log(notes[i])
// }
//         // this will return all the elements within the array

// //nested loops
// for (let i = 0; i < notes.length; i++) {
//     console.log(notes[i]);
//     for (let j = notes.length -1; j >= 0; j-- ){
//         console.log(notes[j]);
//     }
// }
//         //here we have a nested for loop
//         //The first for loop is console logging the array at each index
//         //the second for loop is going backwards


//Array.every tests whether all elements in teh array pass the test implemented by the provide fucntion
//Array.fill changes all elements withing a range of inices in an array to a static value
//Array.filter creates a shadow copy of an array that is filered to an array that pass the test provided by the function
//Array.find returns the first element in the provided array that satisfies
//Array.forEach execures a provided function once for each array element
//Array.join returns a string by concatenating all of the elements in a array
//Array.map creates a new array with the result of what the previous function ask
//Array.pop removes the last element in an array 
//Array.push adds element to the end of the array
//Array.shift removes the first element
//Array.slice shows a portion of an array from start to end
//Array.splice removes or replaces an existing element
//Array.unshift array instances adds the specified element to the front
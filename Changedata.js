var mythologie =["Artemis", "Gaia", "Athena"];
let btnadd = document.querySelector('#add');
let btninsert = document.querySelector('#insert');
let btnremove = document.querySelector('#remove');
let btnend = document.querySelector('#end');
let output = document.querySelector('#output');

console.log(btnadd);
btnadd.addEventListener('click', () => {
    // console.log("ik werk");
    mythologie.push("aaa");
    mythologie.push("zzz");
    console.log(mythologie);
});
console.log(btnaddinsert);
btnadd.addEventListener('click', () => {
    mythologie.shift("aaa");
    mythologie.shift("zzz");
    console.log(mythologie);
});
console.log(btnremove);
btnadd.addEventListener('click', () => {
    mythologie.unshift("zzz");
    mythologie.unshift("aaa");
    console.log(mythologie);
});
console.log(btnend);
btnadd.addEventListener('click', () => {
    mythologie.splice("zzz");
    mythologie.splice("aaa");
    console.log(mythologie);
});
function mythologie() {
    var x = document.getElementById("myBtn").innerText;
    document.getElementById("demo").innerHTML = x;  
  }

var output = mythologie.join("-");
console.log(mythologie);


// var x = mythologie.pop(); hierbij verwijderen we het laatste element uit de array
        // var x = mythologie.shift(); hierbij nemen we het eerste element weg van de array
        // var x = mythologie.push("aaa"); hierbij voegen we data toe aan de array
        // var x = mythologie.unshift("zzz"); hierbij voegen we data toe aan het begin van de array
        // var x = mythologie.splice(); hierbij verwijderen we data uit een array

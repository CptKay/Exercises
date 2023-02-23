/* https://www.teaching-materials.org/javascript/exercises/variables
   https://www.teaching-materials.org/javascript/exercises/functions 
   https://www.teaching-materials.org/javascript/exercises/strings */

/* let childNo = 5;
let partnerName = "Mary";
let geoLoc = "Hampton";
let jobTitle = "Director"; */

// let birthYear = 1976;
let futureYear = 2026;


let maxAge = 86;
// let currAge = (new Date().getFullYear()-birthYear);
let dayAmmo = 5;

let rad = 4;

let cels = 5;
let fh = 70;

function fortuneTeller(childNo, partnerName, geoLoc, jobTitle) {
    let future ='you will be married to ' + partnerName + ' in ' + geoLoc + ' with ' + childNo + ' children as a ' + jobTitle + '.';
alert(future);
};

function ageCalc() {
    alert('you will be ' + (futureYear-birthYear) + ' in ' + futureYear + '.' )
}; 

function supCalc(birthYear, dayAmmo) {
    let currAge = (new Date().getFullYear()-birthYear);
    alert('you will need ' + (maxAge-currAge)*(dayAmmo*365) + ' snacks untill you´re 86.' )
}; 

function circArCalc() {
    alert('The circumference is ' + Math.round(2*Math.PI*rad) + ' & the area is ' + Math.round(Math.PI * Math.pow(rad , 2)) + ' when the radius is ' + rad + '.' )
}; 

function tempConv() {
    alert(cels +'° Celsius are ' + Math.round((cels/5)*9+32) + '° Fahrenheit, ' + fh + '° Fahrenheit are ' + Math.round((fh-32)*5/9) + '° Celsius.' )
};

function puppyAgeCalc(hAge) {
    alert('your puppy is ' + (hAge*7) + '.' )
}; 

function drEvil(ammoD) {
    if (ammoD == 1000000)
    alert('DrEvil(' + ammoD + '): ' + ammoD + ' dollars (pinky).' )
    else alert('DrEvil(' + ammoD + '): ' + ammoD + ' dollars.' )
}; 

function mixUp(string1, string2) {
    alert(string2.slice(0, 2) + string1.slice(2) + " " + string1.slice(0, 2) + string2.slice(2))
}; 

function fixStart(string1) {
    alert(string.replace(1) + string1.slice(2) + " " + string1.slice(0, 2) + string2.slice(2))
}; 
/* https://www.teaching-materials.org/javascript/exercises/variables */

let childNo = 5;
let partnerName = "Mary";
let geoLoc = "Hampton";
let jobTitle = "Director";

let birthYear = 1976;
let futureYear = 2026;

let currAge = (new Date().getFullYear()-birthYear);
let maxAge = 86;
let dayAmmo = 5;

let rad = 4;

let cels = 5;
let fh = 70;

function fortuneTeller() {
    alert('you will be married to ' + partnerName + ' in ' + geoLoc + ' with ' + childNo + ' children as a ' + jobTitle + '.' )
}; 

function ageCalc() {
    alert('you will be ' + (futureYear-birthYear) + ' in ' + futureYear + '.' )
}; 

function supCalc() {
    alert('you will need ' + (maxAge-currAge)*(dayAmmo*365) + ' snacks untill you´re 86.' )
}; 

function circArCalc() {
    alert('The circumference is ' + Math.round(2*Math.PI*rad) + ' & the area is ' + Math.round(Math.PI * Math.pow(rad , 2)) + ' when the radius is ' + rad + '.' )
}; 

function tempConv() {
    alert(cels +'° Celsius are ' + Math.round((cels/5)*9+32) + '° Fahrenheit, ' + fh + '° Fahrenheit are ' + Math.round((fh-32)*5/9) + '° Celsius.' )
}; 
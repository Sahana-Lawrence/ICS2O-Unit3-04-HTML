// JavaScript File

// variables assigned to calculate the area of a trapezoid
function Area(){
var base1 = document.getElementById("base1");
var base2 = document.getElementById("base2")
var height = document.getElementById("height");
var base1value = base1.value;
var base2value = base2.value;
var heightvalue = height.value;
var result = ((base1value+base2value)*(heightvalue/2));
var divresult = document.getElementById("divresult");
divresult.innerHTML = result;
}
var num1, num2, num3, mins, large;
num1 = Math.floor(Math.random() *21);
num2 = Math.floor(Math.random()*21);
num3 = Math.floor(Math.random() *21);
mins = num2*num3;
const letta= [
    "A",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U"
];
var largestNum = Math.max(num1, num2, num3);
if(largestNum == num2){
    large = "Azure("+largestNum+")";
}else if(largestNum == num3){
    large = "Dandelions("+largestNum+")";
}else if(largestNum == num1){
    large = "Lavender("+largestNum+")";
}else if(num1==num2&& largestNum == num1){
    large = "You picked so much flowers :D Lavender("+num1+") and Azure("+num2+")";
}else if(num1 == num3 &&largestNum == num1){
    large = "You picked so much flowers :D  Lavender("+num1+") and Dandelions("+num3+")";
}else if(num2 == num3 && largestNum == num2){
    large = "You picked so much flowers :D Azure("+num2+") and Dandelions("+num3+")";
}




document.getElementById("lavender").innerHTML+=num1;
document.getElementById("azure").innerHTML+=num2;
document.getElementById("dandelion").innerHTML+=num3;
document.getElementById("time").innerHTML+=+mins+" minutes or "+Math.floor(mins / 60)+" hrs and "+mins%60+"mins to pick all those flowers!!";
document.getElementById("letter").innerHTML+=letta[num1];
document.getElementById("large").innerHTML+= large;



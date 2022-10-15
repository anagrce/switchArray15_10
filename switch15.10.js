
//zadatak 1
var dan = 1;
var result='';

switch(dan){
    case 1:
    result="Monday";
    break;
    case 2:
        result="Tuesday";
        break;
    case 3:
        result="Wednesday";
        break;
    case 4:
        result="Thursday" 
        break;
    case 5:
        result="Friday";
        break;
    case 6:
        result="Saturday";
        break;
    case 7:
        result="Sunday";
        break;   
    default:
        result="I don't know.";
        break;
}
console.log(result);
//-----------------------------------
// zadatak 2
var dan = 8;
var result='';

switch(dan){
    case 1:
    result="Monday";
    break;
    case 2:
        result="Tuesday";
        break;
    case 3:
        result="Wednesday";
        break;
    case 4:
        result="Thursday" 
        break;
    case 5:
        result="Friday";
        break;
    case 6:
        result="Saturday";
        break;
    case 7:
        result="Sunday";
        break;   
    default:
        result="Input must be a number between 1 and 7";
        break;
}
console.log(result);
//---------------------------------------------
//zadatak 3
var dan = 1;
var result='';

switch(dan){
    case 1:
    result="It's weekday";
    break;
    case 2:
        result="It's weekday";
        break;
    case 3:
        result="It's weekday";
        break;
    case 4:
        result="It's weekday";
        break;
    case 5:
        result="It's weekday";
        break;
    case 6:
        result="It's weekend";
        break;
    case 7:
        result="It's weekend";
        break;   
    default:
        result="Input must be a number between 1 and 7";
        break;
}
console.log(result);
//---------------------------------------------------------
//zadatak 4

var mesec= 5;
var result='';

switch(mesec){
    case 1:
    result="January";
    break;
    case 2:
        result="February";
        break;
    case 3:
        result="March";
        break;
    case 4:
        result="April" 
        break;
    case 5:
        result="May";
        break;
    case 6:
        result="June";
        break;
    case 7:
        result="July";
        break;
    case 8:
        result="August";
        break;
    case 9:
        result="September";
        break;
    case 10:
        result="October";
        break;
    case 11:
        result="November";
        break;
    case 12:
        result="December";
        break;   
    default:
        result="Input must be a number between 1 and 12";
        break;
}
console.log(result);
//------------------------------------------------------------
//zadatak 6

var a='A';
var result='';

switch(a){
    case 'A':
        result='Good job';
        break;
    case 'B':
        result='Pretty good';
        break;
    case 'C':
        result='Passed';
        break;
    case'D':
        result='Not so good';
        break;
    case 'F':
        result='Failed';
        break;
    default:
        result='Unknown grade';    

}
console.log(result);
//-------------------------------------------------------
//zadatak 7
var city="Beograd";
var result="";

switch(city){
    case "Beograd":
    case "Nis":
    case "Novi Sad":
    case "Sombor":
        result="Srbija";
        break;
    case "London":
    case "Liverpul":
        result="England";
        break;
    case "Paris":
    case "Colmar":
    case  "Strasbug":
        result="France";
        break;
    case "Budapest":
    case "Szeged":
    case "Pecuj":
        result="Hungary";
        break;
    case "Barselona":
    case "Madrid":
    case "Valencia":
        result="Spain";
        break;
    default:
        result="Please choose a different city";
        break;

    
}
console.log(result);

//----------------------------------------------------
// zadatak 8
var a=10;
var b =20;
var operation='/';
var c='';

if(b !==0){

switch(operation){
    case '+':
        c=a+b;
        break;
    case '-':
        c= a-b;
        break;
    case '*':
        c=a*b;
        break;
    case '/':
        c=a/b;
        break;
    default:
        c="You can't divide with zero!";
        break;
}
}else{
    c="wrong"
}

console.log(c);

//----------------------------------------
//Array
//zadatak1
var mounthsArray=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November"," December"];

console.log(mounthsArray[5],mounthsArray[9], mounthsArray[0]);

//zadatak 2
var daysArray=['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',' Sunday'];
console.log(daysArray[6]);

//zadatak 3
var numberArray=[2,-4,5,-2,-11];
var negativeArray=[];
var positiveArray=[];
var i=0;

while(i<numberArray.length){
if(numberArray[i]<0){
   negativeArray.push(numberArray[i]);


}else{
    positiveArray.push(numberArray[i]);

}
i=i+1;
}

console.log("Negative elements of the array are "+negativeArray);

//zadatak 4
var numberArray=[5,15,-5,20,12,18,72,14,9];
var divisibleArray=[];
var i=0;

while(i<numberArray.length){
    if(numberArray[i]%3 ==0){
        divisibleArray.push(numberArray[i]);
    }
    i=i+1;
}
console.log("Numbers from array that are divisible by 3 are: "+divisibleArray);

//zadatak 5
var numberArray=[[1,2,1,24],[8,11,9,4],[7,0,7,27],[7,4,28,14],[3,10,26,7]];
var x=numberArray[0][3];
console.log(x);


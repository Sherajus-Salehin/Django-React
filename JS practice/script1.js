document.write("js file connected");
document.getElementById("0001").innerHTML="element"+1+"from script";
// let a;
// let b=a;
// a=90;
// document.write(b);
// var c=prompt("Temperature in celcius: ");
// var f=9/5*c+32;
// alert("Farenheit: "+f+"degree");
// console.log("task complete");

                                                                                //exercise 2


// var Number=prompt("What is your number: ");
// var grade='F';
// var marks=parseInt(Number);
// if(marks>=0 && marks<=100){
//     if(marks>=90)
//         grade='A';
//     else if(marks>=75)
//         grade='B';
//     else if(marks>=60)
//         grade='C'
//     else if (marks>=50)
//         grade='D'

//         alert(`your grade is ${grade}`);
// }else
//     alert("invalid number");

                                                                                //exercise 3
var n1=prompt('Enter number 1: ');
var n2=prompt('Enter number 2: ');
var op=prompt(`select an operation:
                0:add
                1:sub
                2:mult
                3:div
                `);
var result=0;
if(isNaN(n1) || isNaN(n2))
    alert("invalid Number");
else if(op>3 || op<0)
    alert("invalid operation:");
else{
        n1=parseInt(n1);
        n2=parseInt(n2);
    switch(parseInt(op)){
        case 0:
            result=n1+n2;
            break;
        case 1:
            result=n1-n2;
            break;
        case 2:
            result=n1*n2;
            break;
        case 3:
            result=n1/n2;
            break;
        default:
            break;
         }
         alert(`result = ${result}`);
}



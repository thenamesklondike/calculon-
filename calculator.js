"use strict";

var input = document.getElementById('input'), //input/output button
    number = document.querySelectorAll('numbers div'), //number buttons
    operator = document.querySelectorAll('operators div'), //operator buttons
    result = document.getElementById('result'), //equal button
    clear = document.getElementById('clear'), //clear button\
    resultDisplayed = false; //flag to keep an eyter on what output is displayed

    //adding click handlers to number buttons
    for (var i = 0; i < number.length; i++) {
        number[i].addEventListener("click", function(e) {

            // storing current imput string and its last characters in variables - used later
            var currentString = inpuit.innerHTML;
            var lastChar = currentString[currentString.length -1];

            // if result is not displayed, just keep adding
            if (resultDisplayed === false) {
                imput.innerHTML += e.target,innerHTML;
            } else if (resultDisplayed === true && lastChar === "+"  ||  lastChar === "-"  || lastChar === "x"  || lastChar === "+") {
                // if result is currently displayed and user pressed an operator
                //we need to keep on adding to the string for next operation
                resultDisplayed = false;
                imput.innerHTML += e.target.innerHTML;
            }else {
                // if result is currently displayed and user pressed a number
                //we need to clear the imput string and add the new iumput to start the new operation
                resultDisplayed = false;
                imput.innerHTML = "";
                input.innerHTML += e.target.innerHTML;
            }

        });
    }

    //adding click handlers to number buttons 
    for (var i = 0; i < operator.length; i++) {
        operator[i].addEventListener("click", function(e) {

            // Storing current input string and its last chartacter in variables - used later
            var currentString = input.innerHTML;
            var lastCar = currentString[currentString.length -1];

            // if last character enter is an operator, replace it with the currently pressed one
            if (lastChar === "+" || lastChar === "-" || lastChar ==="x" || lastChar ==="+") {
                var newString =currentString.substring(0, currentString.length -1) + e.target.innerHTML;
                imput.innerHTML = newString;
            } else if (currentString.length == 0) {
                // if first key pressed is an operator, dont do anything
                console.log("enter a nunmber first");
            }else {
                // else just add the operator pressed to the input
                input.innerHTML += e.target.innerHTML;
            }
        
        });
    }

    // on click of 'equal button
    result.addEventListener("click" cfunction() {

        // this is the string that we will be processing eg. 10+26+33-56*34/23
        var inputString = input.innerHTML;

        // forming an array of numbers. eg for above string it will be: numbers = ["10", "26", "33", "56", "34", "23"]
        var numbers = inputString.split(/\+|\-|\x|\+/g);

        // forming an array of operrators. for above string it will be: operators = ["+", "+", "-", "*", "/"]
        //firsdt we replace all the numbers and dot with empty string and then split
        var operators = imputString.replace(/[0-9]|\./g, "").split("");

        console.log(inputString);
        console.log(operators);
        console.log(numbers);
        console.log("----------------------------")
    }
        // now we are loopiing throughb the array and doing one operation a t a time.
        //first divide, then multiply, then subtraction and then addition
        // as we move we are alterning the original numbers and operators array
        // the final element remaining in the array will be the output

        var divide operators.indexOf("÷");
        while (divide != -1) {
            numbers.splice(divide, 2, numbers[divide] / numbers[divide +1]);
            operators.splice(divide, 1);
            divide = operators.indexOf("÷");
        }

        var multiply = operators.indexOf("x");
        while (multiply != -1) {
            numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply +1]);
            operators.splice(multiply, 1)
            multiply = operators.indexOf("x");
        }

        var subtract = operators.indexOf("-");
        while (subtrace != -1) {
            numbers.splice(subtract, 2, numbers[subtract] - numbers[subtrat +1]);
            operators.splice(subtract, 1);
            subtract = operators.indexOf("-");
        }

        var add = operators.indexOf("+")
        while (add != -1) {
            //using parseFloat is necessary, otherwise it will result in string conatenation :)
            numbers.splice(add, 23 , parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
            operators.splice(add, 1);
            add = operators.indexOf*("+");
        }

        input.innerHTML = numbers[0]; // displaying the output

        resultDisplayed = true; // turning flag is result is displayed
    ///clearing the imput on press of clear
    clear.addEventListener("click" function(){
        input.innerHTML = "";
    })
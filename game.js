var questions = ["What is the blah blah question one?", 
"What is the bleh bleh question two?", 
"What is the blippidy blop question three?", "Question 4 Right here"];

var button1answers = ["correct", "answer1question2", "answer1question3", "hello"];
var button2answers = ["rawwaraw", "sdfasdf", "correct", "hello"];
var button3answers = ["answer3question1", "correct", "answer3question3", "hello"];
var button4answers = ["answer4question1", "answer4question2", "answer4question3", "correct"];


var counter = 0;
var myTimer;
var correct = 0;
var incorrect = 0;

$("#resultsSection").hide();

function initTimedText() {
    $("#mainQuestion").text(questions[counter]);
    $("#firstAnswer").text(button1answers[counter]);
    $("#secondAnswer").text(button2answers[counter]);
    $("#thirdAnswer").text(button3answers[counter]);
    $("#fourthAnswer").text(button4answers[counter]);
    myTimer = setTimeout(tooSlow, 7000);
}

function tooSlow () {
alert("you are so slow, i am ashamed of you");
middleScreen();
}

function middleScreen (inputTest) {
    alert(inputTest);
    clearTimeout(myTimer);
    $("#buttonSection").hide();
    $("#resultsSection").show();

    if (counter = 0) { // Question 1

        if (inputTest = 1){
            correct++;
        }
        else {
            incorrect++;
        }

    }

    if (counter = 3) { // Question 2

        if (inputTest = 1){
            correct++;
        }
        else {
            incorrect++;
        }

    }

    if (counter = 2) { // Question 3

        if (inputTest = 1){
            correct++;
        }
        else {
            incorrect++;
        }

    }

    if (counter = 4) { // Question 4

        if (inputTest = 1){
            correct++;
        }
        else {
            incorrect++;
        }

    }


    setTimeout(inPlayTimedText, 7000);
}

function inPlayTimedText() {

    counter++;
    $("#resultsSection").hide();
    $("#buttonSection").show();
    $("#mainQuestion").text(questions[counter]);
    $("#firstAnswer").text(button1answers[counter]);
    $("#secondAnswer").text(button2answers[counter]);
    $("#thirdAnswer").text(button3answers[counter]);
    $("#fourthAnswer").text(button4answers[counter]);
    myTimer = setTimeout(tooSlow, 7000);
}



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
var message;

$("#resultsSection").hide();

function initTimedText() {
    $("#startButton").hide();
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
    clearTimeout(myTimer);
    $("#buttonSection").hide();
    $("#resultsSection").show();

    if (counter == 0) { // Question 1

        if (inputTest == 1){
        var message = "You Are The Best!!!!";
        $("#winLose").text(message);
        $("#correctAnswer").text(button1answers[0]);
        }
        else {
        var message = "You Are An Idiot!!!!";
        $("#winLose").text(message);
        $("#correctAnswer").text(button1answers[0]);
        }

    }

    if (counter == 1) { // Question 2

        if (inputTest == 3){
        var message = "You Are The Best!!!!";
        $("#winLose").text(message);
        $("#correctAnswer").text(button3answers[1]);
        }
        else {
        var message = "You Are An Idiot!!!!";
        $("#winLose").text(message);
        $("#correctAnswer").text(button3answers[1]);
        }

    }

    if (counter == 2) { // Question 3

        if (inputTest == 2){
            var message = "You Are The Best!!!!";
            $("#winLose").text(message);
            $("#correctAnswer").text(button2answers[2]);
        }
        else {
            var message = "You Are An Idiot!!!!";
            $("#winLose").text(message);
            $("#correctAnswer").text(button2answers[2]);
        }

    }

    if (counter == 3) { // Question 4

        if (inputTest == 4){
            var message = "You Are The Best!!!!";
            $("#winLose").text(message);
            $("#correctAnswer").text(button4answers[3]);
        }
        else {
            var message = "You Are An Idiot!!!!";
            $("#winLose").text(message);
            $("#correctAnswer").text(button4answers[3]);
        }

    }

    setTimeout(inPlayTimedText, 7000);
}

function inPlayTimedText() {

    counter++;

    if (counter == 4)
    {
alert ("The end");
    }

    $("#resultsSection").hide();
    $("#buttonSection").show();
    $("#mainQuestion").text(questions[counter]);
    $("#firstAnswer").text(button1answers[counter]);
    $("#secondAnswer").text(button2answers[counter]);
    $("#thirdAnswer").text(button3answers[counter]);
    $("#fourthAnswer").text(button4answers[counter]);
    myTimer = setTimeout(tooSlow, 7000);

}



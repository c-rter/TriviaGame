var questions = ["What movie won best picture in 2010?", 
"What movie won best picture in 2011?", 
"What movie won best picture in 2012?", "What movie won best picture in 2013?"];

var button1answers = ["The King's Speech", "Black Swan", "Inception", "The Fighter"];
var button2answers = ["Zero Dark Thirty", "Django Unchained", "Argo", "Lincoln"];
var button3answers = ["The Help", "The Artist", "Hugo", "The Tree of Life"];
var button4answers = ["The Wolf of Wall Street", "Gravity", "Philomena", "12 Years a Slave"];


var counter = 0;
var myTimer;
var countdownTimer;
var message;
var countdown = 10;


$("#resultsSection").hide();

function bigTimer () {
    if (countdown <= 0) {
        clearInterval(countdownTimer);
        countdown = 10;
    }
    $("#timeRemaining").text(countdown);
    countdown--;
}

function initTimedText() {
    $("#startButton").hide();
    bigTimer();
    countdownTimer = setInterval(bigTimer, 1000);
    $("#timeRemaining").show();
    $("#mainQuestion").show();
    $("#buttonSection").show();
    $("#mainQuestion").text(questions[counter]);
    $("#firstAnswer").text(button1answers[counter]);
    $("#secondAnswer").text(button2answers[counter]);
    $("#thirdAnswer").text(button3answers[counter]);
    $("#fourthAnswer").text(button4answers[counter]);
    myTimer = setTimeout(tooSlow, 10000);
}

function tooSlow () {
alert("You have taken too much time.");
middleScreen();
}

function middleScreen (inputTest) {
    clearTimeout(myTimer);
    $("#timeRemaining").hide();
    $("#buttonSection").hide();
    $("#resultsSection").show();

    if (counter == 0) { // Question 1

        if (inputTest == 1){
        var message = "Well done, you have a great movie memory!";
        $("#winLose").text(message);
        $("#correctAnswer").text(button1answers[0]);
        }
        else {
        var message = "Difficult isn't it! Who has space in their brain for this stuff anyways...";
        $("#winLose").text(message);
        $("#correctAnswer").text(button1answers[0]);
        }

    }

    if (counter == 1) { // Question 2

        if (inputTest == 3){
        var message = "Well done, you have a great movie memory!";
        $("#winLose").text(message);
        $("#correctAnswer").text(button3answers[1]);
        }
        else {
        var message = "Difficult isn't it! Who has space in their brain for this stuff anyways...";
        $("#winLose").text(message);
        $("#correctAnswer").text(button3answers[1]);
        }

    }

    if (counter == 2) { // Question 3

        if (inputTest == 2){
            var message = "Well done, you have a great movie memory!";
            $("#winLose").text(message);
            $("#correctAnswer").text(button2answers[2]);
        }
        else {
            var message = "Difficult isn't it! Who has space in their brain for this stuff anyways...";
            $("#winLose").text(message);
            $("#correctAnswer").text(button2answers[2]);
        }

    }

    if (counter == 3) { // Question 4

        if (inputTest == 4){
            var message = "Well done, you have a great movie memory!";
            $("#winLose").text(message);
            $("#correctAnswer").text(button4answers[3]);
        }
        else {
            var message = "Difficult isn't it! Who has space in their brain for this stuff anyways...";
            $("#winLose").text(message);
            $("#correctAnswer").text(button4answers[3]);
        }

    }

    if (counter < 3)
    {
        setTimeout(inPlayTimedText, 7000);
    }

    if (counter == 3)
    {
        setTimeout(resetGame, 7000);
    }

}

function resetGame () {
    clearTimeout(myTimer);
    alert("Game over. Press the start button to play again.");
    counter = 0;
    countdown = 10;
    $("#resultsSection").hide();
    $("#mainQuestion").hide();
    $("#buttonSection").hide();
    $("#startButton").show();

}

function inPlayTimedText() {
    countdownTimer = setInterval(bigTimer, 1000);
    $("#timeRemaining").show();
    counter++;
    $("#resultsSection").hide();
    $("#buttonSection").show();
    $("#mainQuestion").text(questions[counter]);
    $("#firstAnswer").text(button1answers[counter]);
    $("#secondAnswer").text(button2answers[counter]);
    $("#thirdAnswer").text(button3answers[counter]);
    $("#fourthAnswer").text(button4answers[counter]);
    myTimer = setTimeout(tooSlow, 10000);

}

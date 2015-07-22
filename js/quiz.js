'use strict';

var data;
var counter = 0;
var nameAnswerPairs = [];

jQuery(document).ready(function($) {
    $.getJSON("test-data.json", function(json) {
        data = json;
        generateHTML(json);
    });
});

function generateHTML(data) {

    document.title = data.title;

    var form = document.getElementById('cd-form');

    data.questions.forEach(function(question) {

        var questionHTML = "<fieldset>";

        var description = "<h4>" + question.description + "</h4>";
        questionHTML += description;

        if (isInputQuestion(question)) {
            questionHTML += generateInput();
        }

        questionHTML += "</fieldset>";
        form.insertAdjacentHTML('beforeend', questionHTML);
    });

    form.insertAdjacentHTML('beforeend', generateSubmit());
}

function isInputQuestion(question) {
    return question.alternatives.length === 0;
}

function generateInput() {
    var uniqueName = "cd-input-" + counter;
    nameAnswerPairs.push({"name": '#' + uniqueName, "answer": data.questions[counter].answer});
    counter++;
    return '<input class="input" name=' + uniqueName + ' id=' + uniqueName + ' type="text" required>';
}

function generateSubmit() {
    return '<div><input type="submit" value="Submit"></div>';
}

// Runs when user chooses to submit their answers
$("form").submit(function(event) {
    checkAnswers();
    event.preventDefault();
});

function checkAnswers() {
    nameAnswerPairs.forEach(function(pair) {
        console.log(pair);
        if ($(pair.name).val() === pair.answer) {
            console.log("YAY!, correct!");
        }
    });
}

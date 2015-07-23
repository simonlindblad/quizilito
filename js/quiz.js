'use strict';

var counter = 0;
var nameAnswerPairs = [];

jQuery(document).ready(function($) {
    generateHTML();
});

function generateHTML() {

    document.title = data.title;

    $("legend").text(data.title);

    var form = document.getElementById('cd-form');
    var answersSection = document.getElementById("answers");

    data.questions.forEach(function(question) {

        var questionHTML = "<fieldset>";
        var answerHTML = "<div>";

        var description = "<h4>" + question.description + "</h4>";
        questionHTML += description;
        answerHTML += description;

        if (isInputQuestion(question)) {
            questionHTML += generateInput();
        }
        else {
            questionHTML += generateRatio(question.alternatives);
        }

        answerHTML += addAnswer(question);

        questionHTML += "</fieldset>";
        answerHTML += "</div>";
        form.insertAdjacentHTML('beforeend', questionHTML);
        answersSection.insertAdjacentHTML('beforeend', answerHTML);
    });

    form.insertAdjacentHTML('beforeend', createButtons());
}

function isInputQuestion(question) {
    return question.alternatives.length === 0;
}

function generateInput() {
    var uniqueName = "cd-input-" + counter;
    nameAnswerPairs.push({"name": '#' + uniqueName, "answer": data.questions[counter].answer});
    counter++;
    return '<input class="input" name=' + uniqueName + ' id=' + uniqueName + ' type="text">';
}

function generateRatio(alternatives) {
    var uniqueName = "cd-ratio-" + counter;
    nameAnswerPairs.push({"name": "input[name=" + uniqueName + "]:checked", "answer": data.questions[counter].answer});
    counter++;

    var html = '<ul class="cd-form-list">';
    alternatives.forEach(function(alternative) {
        html += '<li><input name=' + uniqueName + ' type="radio" value=' + alternative + '>';
        html += "<label>" + alternative + "</label></li>";
    });

    html += '</ul>';
    return html;
}

function createSubmitButton() {
    return '<input type="submit" value="Submit">';
}

function createButtons() {
    return '<div>' + createSubmitButton() + createShowAnswerButton() + '</div>';
}

function createShowAnswerButton() {
    return '<input type="button" value="Show answers" onClick="toggleAnswers()">';
}

// Runs when user chooses to submit their answers
$("form").submit(function(event) {
    checkAnswers();
    event.preventDefault();
});

function checkAnswers() {

    var foundFaults = false;

    nameAnswerPairs.forEach(function(pair) {
        if ($(pair.name).val() !== pair.answer) {
            foundFaults = true;
            $(pair.name).addClass('error');
        }
        else {
            $(pair.name).removeClass('error');
        }
    });

    (foundFaults) ? $(".correct-message").hide() : $(".correct-message").show();
}

function addAnswer(question) {
    return "<p>" + question.answer + "</p>";
}

function toggleAnswers() {
    $(".cd-answers-wrapper").slideToggle();
}

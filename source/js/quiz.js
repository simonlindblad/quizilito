'use strict';

var counter = 0;
var nameAnswerPairs = []; // Storing respective field and answer

// Generate when document is ready
jQuery(document).ready(function($) {
    generateHTML();

    $.getScript("https://cdnjs.cloudflare.com/ajax/libs/gist-embed/2.1/gist-embed.min.js", function(){
    });
});

function generateHTML() {

    document.title = data.title;
    $("legend").text(data.title);

    var form = document.getElementById('cd-form');
    var answersSection = document.getElementById("answers");

    var form = $('#cd-form');
    var answersSection = $('#answers');

    data.questions.forEach(function(question) {

        var questionHTML = "";


        if ("gist_id" in question) {
            questionHTML += generateGist(question.gist_id);
        }

        var description = wrap(question.description, "<h4></h4>");
        questionHTML += description;
        var answerHTML = description;

        answerHTML += addAnswer(question);
        if (isInputQuestion(question)) {
            questionHTML += generateInput();
        }
        else {
            questionHTML += generateRatio(question.alternatives);
        }

        questionHTML = wrap(questionHTML, "<fieldset></fieldset>");
        answerHTML = wrap(answerHTML, "<div></div>");

        form.append(questionHTML);
        answersSection.append(answerHTML);
    });
    form.append(createButtons());
}

// Wraps a given string in another string rep. of a tag
function wrap(string, tag) {
    var divider = tag.indexOf(">") + 1; // Up and including >
    return tag.slice(0, divider) + string + tag.slice(divider);
}

function generateGist(gistId) {
    return '<code data-gist-id=' + gistId + '></code>';
}

function isInputQuestion(question) {
    return question.alternatives.length === 0;
}

function generateInput() {
    var uniqueName = "cd-input-" + counter;
    nameAnswerPairs.push({"name": '#' + uniqueName, "answer": escape(data.questions[counter].answer)});
    counter++;
    return '<input class="input" name=' + uniqueName + ' id=' + uniqueName + ' type="text">';
}

function generateRatio(alternatives) {
    var uniqueName = "cd-ratio-" + counter;
    nameAnswerPairs.push({"name": "input[name=" + uniqueName + "]:checked", "answer": escape(data.questions[counter].answer)});
    counter++;

    var html = '<ul class="cd-form-list">';
    alternatives.forEach(function(alternative) {
        html += '<li><input name=' + uniqueName + ' type="radio" value=' + escape(alternative) + '>';
        html += "<label>" + alternative + "</label></li>";
    });

    html += '</ul>';
    return html;
}

function createButtons() {
    var submitButton = '<input type="submit" value="Submit">';
    var showAnswersButton = '<input type="button" value="Show answers" onClick="toggleAnswers()">';

    return '<div>' + submitButton + showAnswersButton + '</div>';
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

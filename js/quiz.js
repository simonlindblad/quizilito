'use strict'

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

    data.questions.forEach(function(question) {

        var description = "<h4>" + question.description + "</h4>";

        var form = document.getElementById('cd-form');
        form.insertAdjacentHTML('beforeend', description);

        if (isInputQuestion(question)) {
            form.insertAdjacentHTML('beforeend', generateInput());
        }
    });

    generateSubmit();
}

function generateInput() {
    var uniqueName = "cd-input-" + counter;
    nameAnswerPairs.push({"name": '#' + uniqueName, "answer": data.questions[counter].answer});
    counter++;
    return '<input class="input" name=' + uniqueName + ' id=' + uniqueName + ' type="text" required>';
}

function generateSubmit() {
    var form = document.getElementById('cd-form');
    form.insertAdjacentHTML('beforeend',
        '<div><input type="submit" value="Submit"></div>');
}

function isInputQuestion(question) {
    return question.alternatives.length == 0;
}

$("form").submit(function(event) {
    var serializedData = $(this).serializeArray();
    checkAnswers(serializedData);
    event.preventDefault();

});

function checkAnswers(answers) {
    nameAnswerPairs.forEach(function(pair) {
        console.log(pair);
        if ($(pair.name).val() === pair.answer) {
            console.log("YAY!, correct!");
        }
    });
}

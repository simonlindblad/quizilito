'use strict'

var data;
var inputCounter = 0;
var radioCounter = 0;
jQuery(document).ready(function($) {
    $.getJSON("test-data.json", function(json) {
        data = json;
        generateHTML(json);
    });
});

function generateHTML(data) {
    console.log(data);
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
    var uniqueName = "cd-input-" + inputCounter;
    inputCounter++;
    return '<input class="input" name=' + uniqueName + ' type="text" required>';
}

function generateSubmit() {
    var form = document.getElementById('cd-form');
    form.insertAdjacentHTML('beforeend',
        '<div><input type="submit" value="Send Message"></div>');
}

function isInputQuestion(question) {
    return question.alternatives.length == 0;
}

$("form").submit(function(event) {
    console.log($(this).serializeArray());
    event.preventDefault();
});

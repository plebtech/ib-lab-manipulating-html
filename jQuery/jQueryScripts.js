// wait for browser to load document.
$(document).ready(function () {
    $('.demo').click(function () {
        $(this).hide(200);
    });
});

// overarching ordered list for each instruction.
$('body').append('<ol></ol>');
for (i = 0; i < 6; i++) {
    $('body ol').append('<li></li>');
}

// first instruction: button to alert.
$('body li:first').append('<button>Click HERE for an alert</button>');
$('ol button:first').click(function () {
    alert("You clicked the button. Good job!");
});
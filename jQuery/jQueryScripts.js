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
$('body li').eq(0).append('<button>Click HERE for an alert</button>');
$('ol button').eq(0).click(function () {
    alert("You clicked the button. Good job!");
});

// second instruction: button to add text from field.
$('ol li').eq(1).append('<input>');
$('ol li').eq(1).append('<button>Alert your text</button>');
$('ol button').eq(1).click(function () {
    alert($('ol li input').val());
});

// third instruction: color-changing div.
$('ol li').eq(2).append('<div>This is a div</div>');
$('ol li div').eq(0).mouseover(function () {
    $(this).css("background-color", randomColor());
})
$('ol li div').eq(0).mouseout(function () {
    $(this).css("background-color", 'white');
})

// random rgb color generator.
function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let random = "rgb(" + r + "," + g + "," + b + ")";
    return random;
}

// fourth instruction: changing p color on click.
let p = "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iusto maxime saepe id eaque nisi laboriosam, reprehenderit enim fuga modi? Nesciunt magni sed placeat saepe quibusdam similique laboriosam, excepturi harum! Explicabo obcaecati maxime reprehenderit cum quis accusantium accusamus. Illum eum numquam vel ipsum iusto inventore possimus eos quod exercitationem, dolorum a distinctio nobis, vitae sequi earum ad! Excepturi quos perferendis quaerat enim provident ex velit eaque nihil cumque at inventore, nam commodi laborum voluptate perspiciatis porro reprehenderit, iusto cupiditate optio neque facere quibusdam assumenda non? Ad ea necessitatibus sint possimus quibusdam tempora numquam, accusamus voluptatibus ab minus adipisci magni repellendus.</p>";
$('ol li').eq(3).append(p);
$('ol li p').eq(0).click(function () {
    // $(this).css("color", 'red');
    $(this).css("color", randomColor());
});
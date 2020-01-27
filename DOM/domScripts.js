// wait for browser to load HTML, then call loader function.
document.addEventListener('DOMContentLoaded', onLoad());

// loader function to call all subsequent functions.
function onLoad() {
    list();
    mkAlertBtn();
    mkTxtBox();
    mkDiv();
    mkP();
    mkDivBtn();
    mkUl();
}

// create overarching list to number each step.
function list() {
    let listOrdered = document.createElement('ol');
    document.body.appendChild(listOrdered);
    for (i = 0; i < 6; i++) {
        let listItem = document.createElement('li');
        listOrdered.appendChild(listItem);
    }
}

function mkAlertBtn() {
    let alertBtn = document.createElement('button');
    let alertBtnTxt = document.createTextNode("Click HERE for an alert");
    alertBtn.appendChild(alertBtnTxt);
    let targetLi = document.querySelectorAll('li')[0];
    targetLi.appendChild(alertBtn);
    listenAlertBtn(alertBtn);
}

function listenAlertBtn(btn) {
    btn.addEventListener('click', function () {
        alert("You clicked the button. Good job!");
    });
}

function mkTxtBox() {
    let txtBtn = document.createElement('button');
    let txtBtnTxt = document.createTextNode("Alert your text");
    txtBtn.appendChild(txtBtnTxt);
    let targetLi = document.querySelectorAll('li')[1];
    let txtField = document.createElement('input');
    targetLi.appendChild(txtField);
    targetLi.appendChild(txtBtn);
    listenTxtBtn(txtBtn);
}

function listenTxtBtn(btn) {
    btn.addEventListener('click', function () {
        let alertTxt = document.querySelector('input').value;
        alert(alertTxt);
    });
}

function mkDiv() {
    let div = document.createElement('div');
    let divTxt = document.createTextNode("This is a div");
    div.appendChild(divTxt);
    let targetLi = document.querySelectorAll('li')[2];
    targetLi.appendChild(div);
    listenDiv(div);
}

function listenDiv(div) {
    div.addEventListener("mouseover", function () {
        div.style.backgroundColor = 'red';
    });
    div.addEventListener("mouseout", function () {
        div.style.backgroundColor = 'white';
    })
}

function mkP() {
    let p = document.createElement('p');
    let pTxt = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iusto maxime saepe id eaque nisi laboriosam, reprehenderit enim fuga modi? Nesciunt magni sed placeat saepe quibusdam similique laboriosam, excepturi harum! Explicabo obcaecati maxime reprehenderit cum quis accusantium accusamus. Illum eum numquam vel ipsum iusto inventore possimus eos quod exercitationem, dolorum a distinctio nobis, vitae sequi earum ad! Excepturi quos perferendis quaerat enim provident ex velit eaque nihil cumque at inventore, nam commodi laborum voluptate perspiciatis porro reprehenderit, iusto cupiditate optio neque facere quibusdam assumenda non? Ad ea necessitatibus sint possimus quibusdam tempora numquam, accusamus voluptatibus ab minus adipisci magni repellendus.");
    p.appendChild(pTxt);
    let targetLi = document.querySelectorAll('li')[3];
    targetLi.appendChild(p);
    listenP(p);
}

function listenP(p) {
    p.addEventListener("click", function () {
        // p.style.color = 'red';
        p.style.color = randomColor();
    });
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let random = "rgb(" + r + "," + g + "," + b + ")";
    return random;
}

function mkDivBtn() {
    let btn = document.createElement('button');
    let btnTxt = document.createTextNode("Click here to add a div");
    btn.appendChild(btnTxt);
    let targetLi = document.querySelectorAll('li')[4];
    targetLi.appendChild(btn);
    let div = document.createElement('div');
    targetLi.appendChild(div);
    listenDivBtn(btn, div);
}

function listenDivBtn(btn, div) {
    btn.addEventListener("click", function () {
        let span = document.createElement('span');
        let spanTxt = document.createTextNode('Nick Mc');
        span.appendChild(spanTxt);
        div.appendChild(span);
    })
}

function mkUl() {
    let btn = document.createElement('button');
    let btnTxt = document.createTextNode("Add list item below");
    btn.appendChild(btnTxt);
    let ul = document.createElement('ul');
    let targetLi = document.querySelectorAll('li')[5];
    targetLi.appendChild(btn);
    targetLi.appendChild(ul);
    listenUlBtn(btn, ul);
}

function listenUlBtn(btn, ul) {
    btn.addEventListener("click", function () {
        let friends = ['Justin', 'Isabel', 'Nadine', 'Julio', 'Tom', 'Chase', 'Eric', 'Kailei', 'Hallie', 'Malcolm'];
        let existing = document.querySelectorAll('ul > li');
        if (existing.length < friends.length) {
            let li = document.createElement('li');
            let liTxt = document.createTextNode(friends[existing.length]);
            li.appendChild(liTxt);
            ul.appendChild(li);
        }
    });
}
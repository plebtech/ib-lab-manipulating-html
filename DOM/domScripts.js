document.addEventListener('DOMContentLoaded', onLoad());

function onLoad() {
    list();
    mkAlertBtn();
    mkTxtBox();   
}

function list() {
    let listOrdered = document.createElement('ol');
    document.body.appendChild(listOrdered);
    for (i = 0; i < 4; i++) {
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
    btn.addEventListener('click', function() {
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
    btn.addEventListener('click', function() {
        let alertTxt = document.querySelector('input').value;
        alert(alertTxt);
    });
}
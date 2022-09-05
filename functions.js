// Создайте новый элемент списка при нажатии на кнопку "+"
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("taskValue").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Вы должны что-то написать!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("taskValue").value = "";

    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}



// Создайте кнопку "закрыть" и добавьте ее к каждому элементу списка
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Нажмите на кнопку закрыть, чтобы скрыть текущий элемент списка
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        const div = this.parentElement;
        div.style.display = "none";
    }
}

// Добавление символа "проверено" при нажатии на элемент списка
var list = document.querySelector('ul');
list.addEventListener('submit', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);


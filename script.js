function newTodo() {
    var listItem = document.createElement("li");
    var inputValue = document.getElementById("todoInput").value;
    var text = document.createTextNode(inputValue);
    listItem.appendChild(text);

    if (inputValue === '') {
        alert("할 일을 입력해주세요!");
    } else {
        document.getElementById("todoItems").appendChild(listItem);
    }
    document.getElementById("todoInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    listItem.appendChild(span);

    var close = document.getElementsByClassName("close");
    for (var i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

    listItem.onclick = function() {
        this.classList.toggle('checked');
    }
}

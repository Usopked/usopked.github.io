window.onload = function() {
    loadTodos();
}

function newTodo() {
    var listItem = document.createElement("li");
    var inputValue = document.getElementById("todoInput").value;
    var inputDate = document.getElementById("todoDate").value;
    var text = document.createTextNode(inputValue + " - " + inputDate);
    listItem.appendChild(text);

    if (inputValue === '') {
        alert("할 일을 입력해주세요!");
    } else {
        document.getElementById("todoItems").appendChild(listItem);
    }
    document.getElementById("todoInput").value = "";
    document.getElementById("todoDate").value = "";

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
            div.remove();
            saveTodos();
        }
    }

    listItem.onclick = function() {
        this.classList.toggle('checked');
        saveTodos();
    }

    saveTodos();
}

function saveTodos() {
    var lis = document.getElementById("todoItems").getElementsByTagName("li");
    var todos = [];
    for (var i = 0; i < lis.length; i++) {
        if (lis[i].style.display !== "none") {
            todos.push({todo: lis[i].innerText, checked: lis[i].classList.contains('checked')});
        }
    }
    localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTodos() {
    var todos = JSON.parse(localStorage.getItem("todos"));
    if (todos) {
        var ul = document.getElementById("todoItems");
        for (var i = 0; i < todos.length; i++) {
            var li = document.createElement("li");
            if (todos[i].checked) {
                li.classList.add('checked');
            }
            li.appendChild(document.createTextNode(todos[i].todo));
            ul.appendChild(li);
        }
    }
}

var btn = document.getElementById("btn");
btn.onclick = function() {
    var name = document.getElementById("name").value;
    alert("Hello, " + name);
    document.getElementById("name").value = '';
};
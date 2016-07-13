var btn = document.getElementById("btn");
btn.onclick = function() {
    var name = document.getElementById("name").value;
    name = name.toUpperCase;
    document.getElementById("name").value = '';
    if(name == "CONNER CARLILE") {
        alert(name.toLowerCase + " sucks");
    }
    else {
        alert("Hello, " + name.toLowerCase);
    }
};

var btn = document.getElementById("btn");
btn.onclick = function() {
    var name = document.getElementById("name").value;
    document.getElementById("name").value = '';
    if(name == "conner carlile") {
        alert(name + " Sucks");
    }
    else {
        alert("Hello, " + name);
    }
};

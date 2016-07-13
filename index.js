var btn = document.getElementById("btn");
btn.onclick = function() {
    var name = document.getElementById("name").value;
    if(name == "conner carlile") {
        alert(name + " sucks");
    }
    else {
        alert("Hello, " + name);
    }
    document.getElementById("name").value = '';
};

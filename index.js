var btn = document.getElementById("btn");
btn.onclick = function() {
    var name = document.getElementById("name").value.ToUpper;
    if(name == "CONNER CARLILE") {
        alert(name + " sucks");
    }
    else {
        alert("Hello, " + name);
    }
    document.getElementById("name").value = '';
};

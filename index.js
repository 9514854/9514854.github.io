var btn = document.getElementById("btn");
document.getElementById("name")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("btn").click();
    }
});
btn.onclick = function() {
    var name = document.getElementById("name").value.toLowerCase();
    if(name == "conner") {
        document.getElementById("tag").innerHTML = '';
        document.getElementById("tag").innerHTML += "Your nickname is Awesome";
    }
    else if (name == "lance") {
       document.getElementById("tag").innerHTML = '';
        document.getElementById("tag").innerHTML += "Your nickname is Stoned"; 
    }
    else {
        document.getElementById("tag").innerHTML = '';
        document.getElementById("tag").innerHTML += "Your nickname is " + name[0] + name[1] + name[name.length-1];
    }
    document.getElementById("name").value = '';
};
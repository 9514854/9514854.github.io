var nick = [];
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
    for(var i = 0; i < name.length; i++) {
        nick.push(name[i]);
    }
    if(name == "conner") {
        document.getElementById("tag").innerHTML = '';
        document.getElementById("tag").innerHTML += "Your nickname is Awesome";
    }
    else if (name == "lance") {
       document.getElementById("tag").innerHTML = '';
        document.getElementById("tag").innerHTML += "Your nickname is Stoned"; 
    }
    else {
        var m = nick[0];
        var n = nick.splice(1, 1);
        var a = nick.splice(-1, 1);
        document.getElementById("tag").innerHTML = '';
        document.getElementById("tag").innerHTML += "Your nickname is " + m + n + a;
    }
    document.getElementById("name").value = '';
    nick = [];
};
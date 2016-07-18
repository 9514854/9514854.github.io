var btn = document.getElementById("btn");
var conner = ["Awesome", "Conman", "Con"]

function newNick(nick) {
    document.getElementById("tag").innerHTML = "Your nickname is " + nick;
}

document.getElementById("name")
    .addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode == 13) {
            document.getElementById("btn").click();
        }
    });
btn.onclick = function() {
    var name = document.getElementById("name").value.toLowerCase();
    
    if (name == "conner") newNick(conner[Math.floor(Math.random()*conner.length)]);
    else if (name == "lance") newNick("Sick");
    else newNick(name[0] + name[1] + name[name.length - 1]);
    
    document.getElementById("name").value = '';
};
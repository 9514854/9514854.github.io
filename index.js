var btn = document.getElementById("btn");
var conner = ["Awesome", "Conman", "Con", "Concon"];
var brandon = ["Brando", "Bran", "Branny", "Brandinie"];
var randomNicknameGenerators = [
    function(name) { return name[0] + name[1] + name[name.length - 1] },
    function(name) { return name[0] + name[Math.floor(name.length / 2)] + name[name.length - 1] }
];
function ranElement(ran) {
    return ran[Math.floor(Math.random()*ran.length)];
}

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
    
    if (name == "conner") newNick(ranElement(conner));
    else if (name == "brandon") newNick(ranElement(brandon));
    else if (name == "lance") newNick("Sick");
    else newNick(ranElement(randomNicknameGenerators)(name));
    
    document.getElementById("name").value = '';
};
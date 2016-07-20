var btn = document.getElementById("btn");
var conner = ["Awesome", "Conman", "Con", "Concon"];
var brandon = ["Brando", "Bran", "Branny", "Brandinie"];
var isaac = ["Ike", "Ice", "Izzy"];
var scott = ["Scotty", "Skim Milk", "Otto", "Scooter"];
var corynn = ["Rynn", "Cory", "Corn", "Coin", "Corynthian-Leather"];
var weston = ["Westy", "Westonio-Bandaris", "West"];
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

function nickList(name) {
    newNick(ranElement(name));
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
    else if (name == "brandon") nickList(brandon);
    else if (name == "lance") newNick("Sick");
    else if (name == "isaac") newNick(ranElement(isaac));
    else if (name == "scott") newNick(ranElement(scott));
    else if (name == "corynn") newNick(ranElement(corynn));
    else if (name == "weston") newNick(ranElement(weston));
    else newNick(ranElement(randomNicknameGenerators)(name));
    
    document.getElementById("name").value = '';
};
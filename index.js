var nick = [];
var btn = document.getElementById("btn");
btn.onclick = function() {
    var name = document.getElementById("name").value;
    nick = nick.split();
    if(name == "conner carlile") {
        alert(name + " sucks");
    }
    else {
        alert("Hello, " + name);
    }
    alert("Your nickname is " + nick[0] + nick[-1] + nick[-2]);
    document.getElementById("name").value = '';
};

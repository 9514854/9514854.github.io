var nick = [];
var btn = document.getElementById("btn");
btn.onclick = function() {
    var name = document.getElementById("name").value;
    for(var i = 0; i < name.length; i++) {
        nick.push(name[i]);
    }
    if(name == "conner carlile") {
        alert(name + " sucks");
    }
    else {
        var n = nick.splice(-2, 1);
        var a = nick.splice(-1, 1);
        document.getElementById("tag").innerHTML = '';
        document.getElementById("tag").innerHTML += "Your nickname is " + nick[0] + n + a;
    }
    document.getElementById("name").value = '';
    nick = [];
};

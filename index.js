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
    alert("Your nickname is " + nick[0] + nick[-1] + nick[-2]);
    }
    document.getElementById("name").value = '';
};

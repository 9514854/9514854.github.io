var name = document.getElementById("name").value;
var btn = document.getElementById("submit").innerHTML;
btn.onlick = function() {
    alert(name);
};
var btn = document.getElementById("btn");
var conner = ["Awesome", "Conman", "Con", "Concon"];
var brandon = ["Brando", "Bran", "Branny", "Brandinie"];
var isaac = ["Ike", "Ice", "Izzy"];
var scott = ["Scotty", "Skim Milk", "Otto", "Scooter"];
var corynn = ["Rynn", "Cory", "Corn", "Coin", "Corynthian-Leather"];
var weston = ["Westy", "Westonio-Bandaris", "West"];
var savannah = ["Vanna", "Save", "Savannah-Banana", "Banana"];
var mindy = ["The Mindinator", "Mindy-Babindy", "Melinda"];
var riley = ["Rye", "Rile", "Rilo", "Lee", "Rilinator"];
var brady = ["Brad", "Rad", "Raid", "Bradinator"];
var zach = ["Zacharious", "ZZ", "Zach-Attack", "Zachinator"];
var chloee = ["Chlo", "Coco", "Lolo", "Chloinator"];
var emilee = ["Emi", "Millie", "Miles", "Emilinator"];
var elizabeth = ["Liz", "Lizzi", "Beth", "Eli", "Lizinator"];
var annie = ["Ann", "Aninator", "Annika"];
var lance = ["Lanny", "Lancinator", "Lane", "Lace"];
var matthew = ["Mat", "Matty", "Mattinator", "Mattious"];
var kaleb = ["Sexy", "All-Knowing", "Awesome", "High-And-Mighty", "Wizard", "Kalel", "Grand-Master", "Kalinator"];
var alison = ["Ali", "Alinator", "Lis", "Alice"];
var alyssa = ["Aly", "Lys", "Alysinator", "Lyssa"];
var ashlee = ["Ash", "Ashlyn", "Ashinator", "Aly"];
var craig = ["Craig Diggity", "Craiginator", "Big C", "Craigidy"];
var luann = ["Luinator", "Lane", "Lu"];

var randomNicknameGenerators = [
    function(name) { return name[0] + name[1] + name[name.length - 1] },
    function(name) { return name[0] + name[Math.floor(name.length / 2)] + name[name.length - 1]},
    function (name) {return name[0] + name[1] + name[name.length - 2] + name[name.length - 1]}
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
    else if (name == "lance") nickList(lance);
    else if (name == "isaac") nickList(isaac);
    else if (name == "scott") nickList(scott);
    else if (name == "corynn") nickList(corynn);
    else if (name == "weston") nickList(weston);
    else if (name == "savannah") nickList(savannah);
    else if (name == "mindy") nickList(mindy);
    else if (name == "riley") nickList(riley);
    else if (name == "brady") nickList(brady);
    else if (name == "zach") nickList(zach);
    else if (name == "chloee") nickList(chloee);
    else if (name == "emilee") nickList(emilee);
    else if (name == "elizabeth") nickList(elizabeth);
    else if (name == "annie") nickList(annie);
    else if (name == "matthew") nickList(matthew);
    else if (name == "kaleb") nickList(kaleb);
    else if (name == "alison") nickList(alison);
    else if (name == "alyssa") nickList(alyssa);
    else if (name == "ashlee") nickList(ashlee);
    else if (name == "ashley") nickList(ashlee);
    else if (name == "crag") nickList(craig);
    else if (name == "luann") nickList(luann);
    else newNick(ranElement(randomNicknameGenerators)(name));
    
    document.getElementById("name").value = '';
};
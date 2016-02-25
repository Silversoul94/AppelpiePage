
//var portionConvert = document.getElementsByClassName("mybutton").innerHTML;
//var portion = parseInt(portionConvert .innerHTML);
var previous = 1;

function setPortionSize(tallrikar) {
    PortionSize = document.getElementsByClassName("setSize");
    for(var i = 0; i<11; i++){ 
    var newPortionSize = parseFloat(PortionSize[i].innerHTML);
    var twoPortion = (tallrikar * newPortionSize)/previous;  
    //document.getElementsByClassName("setSize").innerHTML = twoPortion;
    PortionSize[i].innerHTML = twoPortion;     
    }
    previous = tallrikar;
    console.log("hej");
}

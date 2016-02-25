var previous = 1;
function setPortionSize(tallrikar) {
    PortionSize = document.getElementsByClassName("setSize");
    for(var i = 0; i<11; i++){ 
    var newPortionSize = parseFloat(PortionSize[i].innerHTML);
    var twoPortion = (tallrikar * newPortionSize)/previous;  
    PortionSize[i].innerHTML = twoPortion;     
    }
    previous = tallrikar;
}

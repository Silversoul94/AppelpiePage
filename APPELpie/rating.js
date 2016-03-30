// api key 9675310239642bc6
//edu.oscarb.se/sjk15/api/recipe/?api_key=9675310239642bc6&recipe=appelpaj

//edu.oscarb.se/sjk15/api/recipe/?api_key=9675310239642bc6&recipe=appelpaj&rating=4

var starap = ["", "#starap1", "#starap2", "#starap3", "#starap4", "#starap5"];
var voteap = "http://edu.oscarb.se/sjk15/api/recipe/?api_key=9675310239642bc6&recipe=appelpaj&rating=";

$("#starap1").hover(function(){
        $("#starap1").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#starap1").css("-webkit-filter", "grayscale(100%)");
    });
$("#starap2").hover(function(){
        $("#starap1").css("-webkit-filter", "grayscale(0%)");
        $("#starap2").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#starap1").css("-webkit-filter", "grayscale(100%)");
        $("#starap2").css("-webkit-filter", "grayscale(100%)");
    });
$("#starap3").hover(function(){
        $("#starap1").css("-webkit-filter", "grayscale(0%)");
        $("#starap2").css("-webkit-filter", "grayscale(0%)");
        $("#starap3").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#starap1").css("-webkit-filter", "grayscale(100%)");
        $("#starap2").css("-webkit-filter", "grayscale(100%)");
        $("#starap3").css("-webkit-filter", "grayscale(100%)");
    });
$("#starap4").hover(function(){
        $("#starap1").css("-webkit-filter", "grayscale(0%)");
        $("#starap2").css("-webkit-filter", "grayscale(0%)");
        $("#starap3").css("-webkit-filter", "grayscale(0%)");
        $("#starap4").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#starap1").css("-webkit-filter", "grayscale(100%)");
        $("#starap2").css("-webkit-filter", "grayscale(100%)");
        $("#starap3").css("-webkit-filter", "grayscale(100%)");
        $("#starap4").css("-webkit-filter", "grayscale(100%)");
    });
$("#starap5").hover(function(){
        $("#starap1").css("-webkit-filter", "grayscale(0%)");
        $("#starap2").css("-webkit-filter", "grayscale(0%)");
        $("#starap3").css("-webkit-filter", "grayscale(0%)");
        $("#starap4").css("-webkit-filter", "grayscale(0%)");
        $("#starap5").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#starap1").css("-webkit-filter", "grayscale(100%)");
        $("#starap2").css("-webkit-filter", "grayscale(100%)");
        $("#starap3").css("-webkit-filter", "grayscale(100%)");
        $("#starap4").css("-webkit-filter", "grayscale(100%)");
        $("#starap5").css("-webkit-filter", "grayscale(100%)");
    });



$('#starap1').click(function() {
   votesap(1);
});
$('#starap2').click(function() {
   votesap(2);
});
$('#starap3').click(function() {
   votesap(3);
});
$('#starap4').click(function() {
   votesap(4);
});
$('#starap5').click(function() {
   votesap(5);
});



function votesap(i){

        
    $.ajax({
        method: "GET",
        url:  voteap+""+i,
        success: function(data) {
            $.ajax({
                method: "GET",
                url: "http://edu.oscarb.se/sjk15/api/recipe/?api_key=9675310239642bc6&recipe=appelpaj",
                success: function(data) {
                    $('#votesap').text(data.votes+" röster");
                    $('#ratingap').text(data.rating.toFixed(2)+" i snitt.");
                }, 
            });       
        }, 
    });
};

$(document).ready ( function(){
    
    $.ajax({
        method: "GET",
        url: "http://edu.oscarb.se/sjk15/api/recipe/?api_key=9675310239642bc6&recipe=appelpaj",
        success: function(data) { 
            $('#votesap').text(data.votes+" röster");
            $('#ratingap').text(data.rating.toFixed(2)+" i snitt.");
        },     
    });
});






/*
saveclick = 1;
$(".star").click(function() {
    starpic = $(this).attr("id");
         saveclick = 2;
       // $(starpic).prevAll().attr("src","pic/star.png");
    }
);
$(".star").mouseout(function() {
		$(this).attr("src","pic/graystar.png");
            $(this).prevAll().attr("src","pic/graystar.png");
            console.log(saveclick);
            if (saveclick == undefined ){
                    console.log(saveclick);
                }    
			}
);

*/
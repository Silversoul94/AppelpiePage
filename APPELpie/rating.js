// api key 9675310239642bc6


//edu.oscarb.se/sjk15/api/recipe/?api_key=9675310239642bc6&recipe=appelpaj

//edu.oscarb.se/sjk15/api/recipe/?api_key=9675310239642bc6&recipe=appelpaj&rating=4


	$(".star").mouseover(function() {
		$(this).attr("src","pic/star.png");
            $(this).prevAll().attr("src","pic/star.png");
            
			}
);

$(".star").mouseout(function() {
		$(this).attr("src","pic/graystar.png");
			}
);

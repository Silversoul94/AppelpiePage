// api key 9675310239642bc6
//edu.oscarb.se/sjk15/api/recipe/?api_key=9675310239642bc6&recipe=appelpaj

//edu.oscarb.se/sjk15/api/recipe/?api_key=9675310239642bc6&recipe=appelpaj&rating=4


	$(".star").mouseover(function() {
		$(this).attr("src","pic/star.png");
            $(this).prevAll().attr("src","pic/star.png");           
			}
);

saveclick =  1;
$(".star").click(function() {
   // starpic = $(this).attr("id");
         saveclick = 2;
            (this).attr("src","pic/star.png");
            $(starpic).prevAll().attr("src","pic/star.png");
    }
);

$(".star").mouseout(function() {
		starpic=$(this).attr("src","pic/graystar.png");
            $(this).prevAll().attr("src","pic/graystar.png");
            console.log(saveclick);
            if (saveclick == 2 ){
                    starpic=$(this).attr("src","pic/star.png");
                    $(starpic).prevAll().attr("src","pic/star.png");
                }    
			}
);


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
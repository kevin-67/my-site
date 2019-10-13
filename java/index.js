var fr= "false";
var ge= "false";

/*Java Script*/

/*jQuery script*/
$(document).ready(function() {

    $('.go-up-btn').click(function() {
        // Un clic provoque le retour en haut animé.
        $('html, body').animate({scrollTop: 0}, 1000);//Duration in ms
    })

    $('.my-grid-img').on({
        mouseover: function () {
            $(this).css({
                "border-width":"3px",
                "box-shadow": "0px 0px 36px -13px rgba(0,0,0,0.66)",
                "cursor": "pointer"
            });
        },
        mouseout: function () {
            $(this).css({
                "border-width":"1px",
                "box-shadow": "none"
            });
        }
    })

    /*Give class to the 2 div at the end of the body*/
    $(".my-grid-img, .aurora-grid-1, .aurora-grid-2, .aurora-grid-3").click(function(){
        $("#id_viewer_image_container").html("<img src='"+$(this).attr('src')+"' class='image_in_viewer'/>");//Load the image in the div 1 (change html property) and apply the class for the big image

        //Change the class of the 2 div. First to the background, Second for the container of the huge image
        $("#id_viewer_image_background").addClass("viewer_image_background");
        $("#id_viewer_image_container").addClass("viewer_image_container");
    });

    /*When clik on the container of the huge image, delete the 2 class and all is normal again*/
    $("#id_viewer_image_container").click(function(){
        $("#id_viewer_image_container").html("");//Delete the image in the container
        $("#id_viewer_image_background").removeClass("viewer_image_background");//reset div background property by default
        $("#id_viewer_image_container").removeClass("viewer_image_container");//reset div container property by default
    });

    /*Carousel managment*/


    $(".carousel-image, .carousel-btn-box, .carousel-legend-box").on(
        {
            mouseover: function (){
                $(".carousel-image").css("box-shadow","0px 0px 3px 0px rgba(0,0,0,0.90)"); 
            }
        });

    $(".carousel-image, .carousel-btn-box, .carousel-legend-box").on(
        {
            mouseout: function (){
                $(".carousel-image").css("box-shadow","none"); 
            }
        });

    /*Auroras grid managment*/
    $(".aurora-grid-1").on({
        mouseover: function ()
        {
            $(this).css({
                "border-width":"0px",
                "box-shadow": "0px 0px 36px -5px rgba(62,245,44,0.66)",
                "cursor": "pointer"
            });
        }
    });

    $(".aurora-grid-2").on({
        mouseover: function ()
        {
            $(this).css({
                "border-width":"0px",
                "box-shadow": "0px 0px 36px -5px rgba(66,185,249,0.66)",
                "cursor": "pointer"
            });
        }
    });

    $(".aurora-grid-3").on({
        mouseover: function ()
        {
            $(this).css({
                "border-width":"0px",
                "box-shadow": "0px 0px 36px -5px rgba(202,112,231,0.66)",
                "cursor": "pointer"
            });
        }
    });

    $(".aurora-grid-1, .aurora-grid-2, .aurora-grid-3").on({
        mouseout: function () {
            $(this).css({
                "border-width":"1px",
                "box-shadow": "none"
            });
        }
    });

    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
            console.log(data);
        }
    });

    /*to flip the card*/

    $('.flip-card').on('click',function(){
        $(this).toggleClass('flipped');
    });

    /*$(".flip-card").flip({axis: 'y'});
    $(".flip-card").flip(true);

    $(".flip-card").click(function(){//When click a card
        $(this).flip()
    });*/


    $("#fr").click(function(){ 
        if (fr == "false")  {  
            $(".not-fr").hide(); // hide the not french guides
            $("#ge").attr("disabled", true);
            fr="true";
        }
        else{
            $(".not-fr").show();
            $("#ge").attr("disabled", false);
            fr ="false";
        }
    });

    $("#ge").click(function(){
        if (ge == "false")  {
            $(".not-ge").hide(); // hide the not german guides
            $("#fr").attr("disabled", true);
            ge=true;
        }
        else{
            $(".not-ge").show();
            $("#fr").attr("disabled", false);
            ge ="false";
        }
    });

    $("#fr,#ge").hover(function() { 
        $(this).css({"color":"black"}); 
    }, function() { 
        $(this).css({"color":"white"}); 
    }); 

    $('.btn-send-message').click(function() {
        alert("message sended");
        window.location.href = "index.html";
    });
    
    $(".info-btn").click(function() {
        window.location.href = "Contact.html";
    });
    
    
      
    
    


});


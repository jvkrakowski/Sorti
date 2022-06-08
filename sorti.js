$(function (){
    $(".tab-nav a:not(:first)").addClass("inactive");
    $(".tab-panel").hide();
    $(".tab-panel:first").show();

    $(".tab-nav a").click(function(){
        var tabs = $(this).attr("id");
        if( $(this).hasClass("inactive") ) {
            $(".tab-nav a").addClass("inactive");
            $(this).removeClass("inactive");
            
            $(".tab-panel").hide();
            $("#" + tabs + "-panel").fadeIn("slow");
        }

    });
    
});
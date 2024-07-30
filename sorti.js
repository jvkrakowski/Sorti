$(function () {
    $(".tab-nav a:not(:first)").addClass("inactive");
    $(".tab-panel").hide();
    $(".tab-panel:first").show();

    $(".tab-nav button").click(function () {
        var tabs = $(this).attr("id");
        if ($(this).hasClass("inactive")) {
            $(".tab-nav button").addClass("active");
            $(this).removeClass("inactive");

            $(".tab-panel").hide();
            $("#" + tabs + "-panel").fadeIn("slow");
        }

        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).addClass("inactive");

            $(".tab-panel").hide();
            $("#" + tabs + "-panel").fadeIn("slow");
        }



    });

});

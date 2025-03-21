$(document).ready(function () {
    // Initialize the tabs
    $(".tab-nav a:not(:first)").addClass("inactive");
    $(".tab-panel").hide();
    $(".tab-panel:first").show();

    // Event delegation for tab clicks
    $(".tab-nav").on("click", "a", function (event) {
        event.preventDefault();
        var $this = $(this);
        var tabId = $this.attr("id");

        // If the clicked tab is already active, do nothing
        if (!$this.hasClass("inactive")) return;

        // Deactivate all tabs and hide panels
        $(".tab-nav a").addClass("inactive").removeClass("active");
        $(".tab-panel").hide();

        // Activate the clicked tab and show the corresponding panel
        $this.removeClass("inactive").addClass("active");
        $("#" + tabId + "-panel").fadeIn("slow");
    });
});

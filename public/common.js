$(function () {
    function selected($selector) {
        $(".menu>a.selected").removeClass();
        $(".content").load($selector.addClass("selected").attr("href"));
    }
    $(".menu>a").click(function (e) {
        selected($(this));
        if (!e.isTrigger) {
            history.pushState({ page: $(this).attr("href") }, null, $(this).attr("href"));
        }
        e.preventDefault();
    });
    $(window).on("popstate", function () {
        $(".menu>a[href='" + ((history.state && history.state.page) || "Page0.html") + "']").click();
    });
});
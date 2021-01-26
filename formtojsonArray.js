$.fn.toJsonArray = function () {
    let formID = this.attr("id");
    let result = new Array();
    $("#" + formID).find("nav, header, footer, label, article, section, li, ol, ul, p, a, div").each(function () {
        if ($(this).attr("data-array") != null) {
            result.push($(this).toJson());
        }
    });

    return result;
}; 

$.fn.toJsonArray = function () {
    let formID = this.attr("id");
    let result = new Array();

    $("#" + formID).children().each(function () {
        if ($(this).attr("data-array") != null) {
            result.push($(this).toJson());
        }
    });

    return result;
}; 

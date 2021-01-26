var JsonObject = function () {
    this.result = {};
    this.Add = function (key, val) {
        this.result[key] = val;
    };
    this.Get = function () {
        return this.result;
    };
    this.Exists = function (key) {
        return (this.result[key] != null);
    };
    this.GetValue = function (key) {
        return this.result[key];
    };
    this.Set = function (key, value) {
        this.result[key] = value;
    };
    this.AppendSet = function (key, value) {
        this.result[key] = this.result[key] + "," + value;
    };
    this.FindCheckboxValue = function (formID, targetName) {
        let arr = new Array();
        $("#" + formID).find("input:checkbox").each(function () {
            if ($(this).attr("name") == targetName) {
                if ($(this).is(":checked")) {
                    arr.push($(this).val());
                }
            }
        });

        let values = "";
        if (arr.length > 0) {
            for (let i = 0; i < arr.length; i++) {
                if (values == "") {
                    values = arr[i];
                } else {
                    values += "," + arr[i];
                }
            }
        }

        return { name: targetName, value: values };
    };
    this.FindRadioValue = function (formID, targetName) {
        let result = "";
        $("#" + formID).find("input:radio").each(function () {
            if ($(this).attr("name") == targetName) {
                if ($(this).is(":checked")) {
                    result = $(this).val();
                }
            }
        });

        return { name: targetName, value: result };
    };
};

$.fn.toJson = function () {
    let json = new JsonObject();
    let formID = this.attr("id");
    let uid = "";
    let Value = "";
    let name = "";

    $(this).find("input[type=text], input[type=number], input[type=password], input[type=tel], input[type=email], input[type=date], input[type=hidden], select, textarea").each(function () {
        uid = ($(this).attr("name") == null || $(this).attr("name") == "") ? $(this).attr("id") : $(this).attr("name");
        Value = $(this).val();

        if (uid != null && uid != "") {
            try {
                if (json.Exists(uid)) {
                    json.AppendSet(uid, Value);
                } else {
                    json.Add(uid, Value);
                }
            } catch (e) {
                json.Add(uid, "");
            }
        }
    });

    $(this).find("input:radio").each(function () {
        if (name != $(this).attr("name")) {
            name = $(this).attr("name");
            if (name != null && name != "") {
                let radioData = json.FindRadioValue(formID, name);
                json.Add(radioData.name, radioData.value);
            }
        }
    });

    name = "";

    $(this).find("input:checkbox").each(function () {
        if (name != $(this).attr("name")) {
            name = $(this).attr("name");
            if (name != null && name != "") {
                let checkboxData = json.FindCheckboxValue(formID, name);
                json.Add(checkboxData.name, checkboxData.value);
            }
        }
    });

    return json.Get();
};
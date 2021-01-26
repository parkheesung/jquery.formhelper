# Form Helper for JQuery

[![GitHub License](https://img.shields.io/badge/license-MIT-lightgrey.svg)](https://github.com/parkheesung/jquery.formhelper)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/parkheesung/jquery.formhelper/issues)

Jquery extension functions that helps send form.

 - [Building](#building)
    - [Coding](#coding)
    - [Basic Coding](#basic-coding)
    - [Web.Config](#web-config)
    - [Database](#database)
    - [Ajax](#ajax)
    - [Javascript minify](#javascript-minify)
 - [WEC](#wec)
    - [Wec Guide](https://github.com/Exmaru/SimpleWeb/blob/main/wec.md)

---

### Release

[![v1.0.0](https://img.shields.io/badge/release-v1.0-579ACA.svg?logo=data:image/png;base64,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)](https://github.com/parkheesung/jquery.formhelper/releases/download/v1.0.0/Jquery.formhelper.v1.0.0.zip)
> This is the first deployment version. You are not responsible for any problems that may arise from using this version. Please be careful about using it.

---

### Coding

Returns the form data in Json form using the form ID.

```javascript
let jsonData = $("#frm").toJson();

$.post("/proc/ajax", jsonData, function(rtn) {
	console.log(rtn);
});
```

Multiple overlapping data can be returned separately using Custom Attributes.

```javascript
let jsonArray = $("#frm").toJsonArray();
console.log(jsonArray);
```

You only need to add `data-array` property to HTML.
The `ID` is `required` for that tag.

```html
<form id="frm">
    <div id="group1" data-array="g1">
        <input type="hidden" name="seq" id="g1_seq_1" value="1" />
        <input type="hidden" name="IsEnabled" id="g1_IsEnabled_1" value="0" />
        <p><span>제목</span><input type="text" name="title" id="g1_title" value="sample_title_1" /></p>
        <p><span>이름</span><input type="text" name="name" id="g1_name" value="sample_name_1" /></p>
        <p>
            <span>선호</span>
            <input type="checkbox" name="favorite" id="g1_favorite_a" value="a" /><label for="g1_favorite_a">A</label>
            <input type="checkbox" name="favorite" id="g1_favorite_b" value="b" /><label for="g1_favorite_b">B</label>
        </p>
        <p>
            <span>성별</span>
            <input type="checkbox" name="gender" id="g1_gender_M" value="Male" /><label for="g1_gender_M">A</label>
            <input type="checkbox" name="gender" id="g1_gender_F" value="Female" /><label for="g1_gender_F">B</label>
        </p>
    </div>
    <div id="group2" data-array="g2">
        <input type="hidden" name="seq" id="g1_seq_1" value="2" />
        <input type="hidden" name="IsEnabled" id="g1_IsEnabled_1" value="1" />
        <p><span>제목</span><input type="text" name="title" id="g2_title" value="sample_title_2" /></p>
        <p><span>이름</span><input type="text" name="name" id="g2_name" value="sample_name_2" /></p>
        <p>
            <span>선호</span>
            <input type="checkbox" name="favorite" id="g2_favorite_a" value="a" /><label for="g2_favorite_a">A</label>
            <input type="checkbox" name="favorite" id="g2_favorite_b" value="b" /><label for="g2_favorite_b">B</label>
        </p>
        <p>
            <span>성별</span>
            <input type="checkbox" name="gender" id="g2_gender_M" value="Male" /><label for="g2_gender_M">A</label>
            <input type="checkbox" name="gender" id="g2_gender_F" value="Female" /><label for="g2_gender_F">B</label>
        </p>
    </div>
    <div>
        <button type="button" onclick="toJsonTest()">ToJson Test</button>
        <button type="button" onclick="toFormArrayTest()">ToFormArray Test</button>
    </div>
</form>
```

You can use `jsStorage` to handle events more easily.

```javascript
function toJsonTest() {
	let jsonData = $("#frm").toJson();
	console.log(jsonData);
};

function toFormArrayTest() {
	let jsonArray = $("#frm").toJsonArray();
	if (jsonArray.length > 0)
	{
		Queue.EnqueueRange(jsonArray);
		Queue.CallByAjax({
			submit : function(row) {
				console.log(row);
			},
			finish : function() {
				console.log("complete");
			}
		});
	}
};
```


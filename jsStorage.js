var Dictionary = (function () {
    return {
        Add : function (key, value) {
            localStorage.setItem(key, JSON.stringify(value));
        },
        Get : function (key) {
            return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : null;
        },
        ContainKey: function (key) {
            return localStorage.getItem(key) ? true : false;
        }
    }
})();

var queueList = [];

var Queue = (function () {
    return {
        Enqueue : function (value) {
            queueList.push(value);
        },
        EnqueueRange : function (values) {
            if (values != null && values.length > 0) {
                for(let i = 0; i < values.length; i++) {
                    queueList.push(values[i]);
                }
            }
        },
        Dequeue : function () {
            if (queueList.length > 0) {
                return queueList.shift();
            } else {
                return null;
            }
        },
        Clear: function () {
            queueList = null;
            queueList = [];
        },
        CallByAjax:function(obj) {
            if (obj.submit != null && typeof obj.submit == "function") {
                if (queueList.length > 0) {
                    $(obj.submit(this.Dequeue())).promise().done(function() {
                        Queue.CallByAjax(obj);
                    });
                } else {
                    if (obj.finish != null && typeof obj.finish == "function") {
                        setTimeout(obj.finish(), 1);
                    }
                }
            }
        }
    }
})();


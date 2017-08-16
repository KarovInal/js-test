Function.prototype.defer = function(ms) {
    var self = this;

    return function() {
        var arg = arguments;
        setTimeout(function() {
            self.apply(null, arg)
        }, ms);
    }
}

function foo(a, b) {
    console.log(a + b)
}

var foo2 = foo.defer(100);

foo2(1, 2);
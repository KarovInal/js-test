Function.prototype.defer = function(ms) {
    setTimeout(this, ms);
}

function foo() {
    console.log('Hello!')
}

foo.defer(1000);
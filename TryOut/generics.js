function echo(arg) {
    return arg;
}
var x;
var y;
x = echo(10);
y = echo('10');
var ArrayList = (function () {
    function ArrayList() {
        this.arr = [];
    }
    ArrayList.prototype.get = function () {
        return this.arr;
    };
    ArrayList.prototype.add = function (item) {
        this.arr.push(item);
    };
    return ArrayList;
}());
var stringArray = new ArrayList();
stringArray.add('some data');

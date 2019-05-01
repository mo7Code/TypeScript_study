var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.getDistance = function (p) {
        var dx = p.x - this.x;
        var dy = p.y - this.y;
        return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    };
    return Point;
}());
// ...
console.log(Point);
Point.prototype.distanceFromOrigin = function (point) {
    return this.getDistance({ x: 0, y: 0 });
};
var lll = new Point(1, 2);
console.log(lll);
var rrr = lll.getDistance(2);
console.log(rrr);

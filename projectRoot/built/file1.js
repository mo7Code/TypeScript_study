class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getDistance(p) {
        let dx = p.x - this.x;
        let dy = p.y - this.y;
        return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    }
}
// ...
console.log(Point);
Point.prototype.distanceFromOrigin = function (point) {
    return this.getDistance({ x: 0, y: 0 });
};

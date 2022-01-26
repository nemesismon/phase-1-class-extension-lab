class Polygon {
    constructor (integerArr) {
        this.arr = integerArr;
    }
    get countSides() {
        let sidesAmt = this.arr.length;
        return sidesAmt;
    }
    get perimeter() {
        let peri = 0;
        for (let i=0; i < this.arr.length; i++) {
            peri = peri + this.arr[i];
        }
        return peri;
    }
}

class Triangle extends Polygon {
    get countSides() {
        return this.arr.length;
    }
    
    get isValid() {
        let a = this.arr[0];
        let b = this.arr[1];
        let c = this.arr[2];
        if ((a+b) > c && (b+c) > a && (c+a) > b) {
            return true;
        }
        return false;
    }
}

class Square extends Polygon {
    get area () {
        return this.arr[0] * this.arr[0];
    }
    get isValid () {
        let a = this.arr[0];
        let b = this.arr[1];
        let c = this.arr[2];
        let d = this.arr[3];
        if (a === b && b === c && c === d && d === a) {
            return true;
        }
    return false;
    }
}
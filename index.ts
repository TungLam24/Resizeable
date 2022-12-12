interface Resizeable {
    resize(p: number): void
}
class Circle implements Resizeable {
    area: number
    constructor(area) {
        this.area = area
    }
    resize(p: number): void {
        let newarea = this.area * ((100 + p) / 100)
        console.log(`Old area: ${this.area}
        New area: ${newarea}`)
    }
}
class Rectangle extends Circle {
    constructor(area: number) {
        super(area)
    }
}
class Square extends Circle {
    constructor(area: number) {
        super(area)
    }
}
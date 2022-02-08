import { getArea, ShapeType, Shapes } from "./area"


//#shapes
const circle: Shapes = {
    type: ShapeType.circle,
    radius: 5
}

const triangle: Shapes = {
    type: ShapeType.triangle,
    side1: 3,
    side2: 4,
    side3: 5
}

const rectangle: Shapes = {
    type: ShapeType.rectangle,
    length: 10,
    width: 5
}

//function
console.log(getArea(triangle));
console.log(getArea(rectangle));
console.log(getArea(circle));
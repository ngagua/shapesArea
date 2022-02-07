import { getArea } from "./area"

//interfaces
interface Circle {
    type: "circle";
    radius: number;
}

interface Rectangle {
    type: "rectangle";
    length: number;
    width: number;
}
interface Triangle {
    type: "triangle";
    side1: number;
    side2: number;
    side3: number;
}

type Shapes = Circle | Triangle | Rectangle;

//#shapes
const circle: Shapes = {
    type: "circle",
    radius: 5
}

const triangle: Shapes = {
    type: "triangle",
    side1: 3,
    side2: 4,
    side3: 5
}

const rectangle: Shapes = {
    type: "rectangle",
    length: 10,
    width: 5
}

//function
console.log(getArea(triangle));
console.log(getArea(rectangle));
console.log(getArea(circle));
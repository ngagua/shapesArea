
function getCircleArea(radius: number) {
    const circleArea = Math.PI * radius * radius;
    return Math.floor(circleArea);
}

function getRectangleArea(length: number, width: number) {
    const rectangleleArea = length * width;
    return rectangleleArea;
}
function getTriangleArea(side1: number, side2: number, side3: number) {
    const hulfperimeter = (side1 + side2 + side3) / 2;
    const triangleArea = Math.sqrt(
        hulfperimeter * (hulfperimeter - side1) * (hulfperimeter - side2) * (hulfperimeter - side3));
    return triangleArea;
}


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

export function getArea(shape: Shapes): number {
    switch (shape.type) {
        case "circle":
            return getCircleArea(shape.radius);

        case "triangle":
            return getTriangleArea(shape.side1, shape.side2, shape.side3);

        case "rectangle":
            return getRectangleArea(shape.length, shape.width);

    }

}


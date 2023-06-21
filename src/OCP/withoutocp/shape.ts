enum ShapeType {
    Square,
    Rectangle,
    circle,
} 
class Shape {
    height:number
    width: number
    lenth:number
    radius: number
    calculateArea(type: ShapeType) {
        switch (type) {
            case ShapeType.Square:
                return this.height*this.width
            case ShapeType.Rectangle:
                return  this.height*this.width
            case ShapeType.circle:
                return (22/7)*(this.radius*this.radius)
        }
    }
}
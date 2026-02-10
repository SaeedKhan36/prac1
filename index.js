class Rectangle extends shape {
    constructor (height,length,color){
        super(color);
        this.height= height;
        this.length= length;
   

    }

    area(){
        return this.length * this.height
    }

    perimeter(){
        return 2 * (this.length + this.height)
    }
  
    
}
  const  r1 = new Rectangle (2,3,"red")
  console.log(r1)
  const r2 = new Rectangle (2,4,"black");
  console.log(r2.area())
  console.log(r2.perimeter())



class circle extends shape {
    constructor (radius,color){
        super(color);   
        this.radius= radius;
       

    }

    area(){
        return Math.PI * this.radius * this.radius
    }

    circumference(){
        return 2 * Math.PI * this.radius
    }

    paint(){
        return `The color of the circle is ${this.color}`
    }
} 

class square extends shape {
    constructor (side,color){
        super(color);
        this.side= side;
    }

    area(){
        return this.side * this.side
    }

    perimeter(){
        return 4 * this.side
    }
    paint(){
        return `The color of the square is ${this.color}`
    }
}

class shape {
    constructor (color){
        this.color= color;

    }
    paint(){
        return `The color of the shape is ${this.color}`
    }
}

class triangle extends shape {
    constructor (base,height,color){
        super(color);
        this.base= base;
        this.height= height;
    }

    area(){
        return 0.5 * this.base * this.height
    }
    paint(){
        return `The color of the triangle is ${this.color}`
    }
}   
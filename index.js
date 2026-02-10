class Rectangle {
    constructor (height,length,color){
        this.height= height;
        this.length= length;
        this.color= color;

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
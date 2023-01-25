class Rectangle{
    constructor(length, breath, height){
        this.length = length;
        this.breath = breath;
        this.height = height;
    }
    calculate(){
     console.log(this.length * this.breath);
    console.log(2*this.length + 2*this.height);
    return;
    
}
}
let Rectangle1 = new Rectangle(20,10,15);
console.log(Rectangle1);
console.log(Rectangle1.calculate());

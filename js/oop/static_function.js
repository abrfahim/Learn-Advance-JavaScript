// static function called form class not object.

class Car{
    constructor(com,M, C, YM){
        this.company = com;
        this.model = M;
        this.color = C;
        this.year = YM;
    }
    carinfo(){
        console.log(`Hey, This is ${this.company} ${this.model}.
        Color - ${this.color} & manufacturing year ${this.year}`);
    }
    static bikeinfo(){
        console.log(`static function called`);
    }
}

let vehicle1 = new Car("Toyota", "Yaris", "Standard Black", "2022");

vehicle1.carinfo();
// vehicle1.bikeinfo(); // vehicle1 - object so get an error
Car.bikeinfo();  // Car - class
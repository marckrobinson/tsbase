/**
 * Simple hello world class.
 */
class MyHelloWorld {
    name: string;
    constructor(name:string) {
        this.name = name;
    }
    public sayHello(): void {
        console.log(`Hello ${this.name}`);
    }
}

var hw = new MyHelloWorld("World2");
hw.sayHello();

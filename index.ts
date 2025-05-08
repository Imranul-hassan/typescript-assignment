
function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
        return input.toLowerCase();
    }
    else{
        return input.toUpperCase();
    }    
}


function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4);
}



function concatenateArrays<T>(...arrays: T[][]): T[]{
    return arrays.reduce((acc, curr) => acc.concat(curr), []);
}



class Vehicle {
    private make : string;
    private year : number;
    
    constructor(make:string, year:number){
        this.make = make;
        this.year = year;
    }
    public getInfo(): string {
        return `"Make: ${this.make}, Year: ${this.year}"`;
    }
}
class Car extends Vehicle{
    private model : string;

    constructor(make: string, year: number, model: string){
        super(make, year);
        this.model = model;
    }

    public getModel(): string{
        return `"Model : ${this.model}"`;
    }
}



function processValue(value: string | number): number{
    if(typeof value === "string"){
        return value.length;
    }

    else if(typeof value === "number"){
        return value*2;
    }

    throw new Error("Invalid type.");
}




interface Product {
    name: string;
    price: number;
  }
  
function getMostExpensiveProduct(products: Product[]): Product | null{
    if(products.length === 0) return null;

    return products.reduce((mostExpensive, current)=>{
        return current.price > mostExpensive.price ? current : mostExpensive;
    })
}



enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string{
    if(day === Day.Saturday || day === Day.Sunday){
        return "weekend"
    }
    else{
        return "weekday"
    }
  }
  
  

async function squareAsync(n: number): Promise<number>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if(n<0){
                reject (new Error("Negative number is not allowed"))
            }
            else{
                resolve(n*n)
            }
        }, 1000);
    });
}



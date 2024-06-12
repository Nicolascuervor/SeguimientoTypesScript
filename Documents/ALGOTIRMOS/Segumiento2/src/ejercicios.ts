//ejemplo 1
function sumar(num1: number, num2: number): number {
  if (num1 <= 0 || num2 <= 0) {
    throw new Error("ingrese un numerp mayor");
  }
  return num1 + num2;
}
const resultado = sumar(5, 3);
console.log(resultado);

//ejemplo 2
function meses(mes: string) {
  switch (mes) {
    case "enero":
      console.log("es enero");
      break;
    case "febrero":
      console.log("es febrero");
      break;
    case "marzo":
      console.log("es marzo");
      break;
    case "abril":
      console.log("es abril");
      break;
    case "mayo":
      console.log("es mayo");
      break;
    case "junio":
      console.log("es junio");
      break;
    case "julio":
      console.log("es julio");
      break;
    case "agosto":
      console.log("es agosto");
      break;
    case "septiembre":
      console.log("es septiembre");
      break;
    case "octubre":
      console.log("es octubre");
      break;
    case "noviembre":
      console.log("es noviembre");
      break;
    case "diciembre":
      console.log("diciembre");
      break;
    default:
      throw new Error("este mes no exixte");
  }
}
meses("enero");

//ejemplo 3
type Product =
  | {
      name: string;
      price: number;
    }
  | {
      title: string;
      description: string;
    };

let product: Product = { name: "bulsa", price: 20 };
console.log(`Producto: ${product.name}, Precio: ${product.price}`);

//ejemplo 4
for (let i: number = 2; i <= 10; i += 2) {
  console.log(i);
}

//ejemplo 5

const number: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const numero of number) {
  console.log(`tabla del 8. ${numero * 8}`);
}

//ejemplo 6
let a: number = 2;
while (a <= 20 && a % 2 === 0) {
  console.log(a);
  a += 2;
}

//ejemplo 7

const address: {
  readonly street: string;
  readonly city: string;
} = {
  street: `calle 50`,
  city: `Armenia`,
};
console.log(address.city);
console.log(address.street);
//address.street =`calle 14`
//adress.city =`bogota`

//ejemplo 8

const direción = {
  calle: `calle 50`,
  ciudad: `armenia`,
} as const;
console.log(direción.calle);
console.log(direción.ciudad);
//address.calle =`calle 14`
//adress.ciudad =`bogota`

//EJERCICIOS CON FUNCIONES EN TYPESCRIPT

//1
function saludar() {
  console.log("Holaaaa TypeScript :D");
}

saludar();

//2
function multiplicacion(x: number, y: number): number {
  return x * y;
}

console.log(multiplicacion(2, 3));

//3
let saludo = function () {
  console.log(`Hola profe 👍`);
};

saludo();

//4

let elevar = function (num: number, exp: number): number {
  return num ** exp;
};

console.log(elevar(2, 5));

//5

function conversacion(persona1: string, persona2: string, persona3: string) {
  console.log(
    `Hola ${persona1} viste a ${persona2}, pense que estaba con ${persona3}`
  );
}

conversacion("Nicolas", "jose", "juan");

//6
function estado(persona1: string, persona2: string = "no esta disponible") {
  console.log(`${persona1} se encuentra en el trabajo y Nicolas ${persona2}`);
}

estado("Jose", "esta durmiendo");

//FUNCIONES FLECHA EN TYPESCRIPT

//1

const resta = (num1: number, num2: number): number => {
  return num1 - num2;
};

console.log(resta(1, 1));

//2

let salud2 = () => console.log("Hola de nuevo typescript");

salud2();

//3

function add(a: string, b: string): string;
function add(a: number, b: number): number;

function add(a: any, b: any): any {
  return a + b;
}

console.log(add("Adios ", "steve"));
console.log(add(2, 45));

//4

const lista = (...lista: string[]) => {
  console.log(`Tenemos en la lista a ${lista} `);
};

lista("jose", "juan", "pedro");
lista("jose");

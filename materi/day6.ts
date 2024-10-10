// cara menulis sebuah object
// cara 1
const user = {};

// cara 2
const user2 = new Object();

// properties & methode

interface User {
  name: string;
  greet: () => void;
  greet2: () => void;
  hoby?: string;
} //tanpa sama dengan

// type User1 = { //dengan sama dengan

// }

const user3 = {
  name: "budi",
  greet() {
    console.log("Hello");
  },
  greet2: () => {
    console.log();
  },
};
// object tidak menggunakan index, ketika akan mengakses object gunakan key

// add & delete properti
const person: any = {
  name: "joko",
  age: 20,
};

// menambah properti
person.hobby = "futsal"; //menambah properties kedalam object dgn dot/titik
console.log(person);

person["address"] = "jogja"; //menambah properties kedalam object dgn kurung siku
console.log(person);

// delete properti
delete person.address;
console.log(person);

// accessing value
console.log(person.name);
console.log(person["hobby"]);

person.hobby = "badminton";
console.log(person);

// mengakses keynya saja
console.log(Object.keys(person));
// mengakses valunya saja
console.log(Object.values(person));

// immutable& mutable======================================
// mutable: variabel yang bisa diubah datanya (ptimitive data types)
// immutable: object yang tidak bisa diubah saat sudah dibuatt(non primitive data types)

// mutable
const count1: number = 4;
let count2: number = count1;
count2 = 10;

console.log(count1);
console.log(count2);

// immutable
let orang1: any = {
  name: "Budi",
};
let orang2: any = orang1;

orang2.age = 20;

console.log(orang1);
console.log(orang2);

// optional chaining =====================================
// cara aman akses object jika data belum ada
// const test = {
//     name: "budi",
//     address: {
//         street: "jl. solo",
//         city: "xyz",
//     }
// }

const user4: any = {};
// tambahkan tanda tanya, jika tidak ditambahkan "?" maka akan error
// >>>>>>>>>>>>>>>>>>>>> ? <<<<<<<<<<<<<<<<<<<
console.log(user4.address?.city);
console.log(user4.addres);

// FOR IN =================================================
const person3 = {
  name: "aceng",
  age: 90,
};
for (const key in person3) {
  console.log(key);
  console.log(person3[key]);
}

// DESTRUCTURING ASSIGNMENT ================================
// mengeluarakan properti dalam object menjadi sebuah variabel

// versi destrucuring object
const person4 = {
  name: "aceng",
  age: 90,
  hobby: "rebahan",
};
console.log(person4.name);
console.log(person4.age);

const { name, age, hobby } = person4;

console.log(name);
console.log(age);

// versi destructuring array
const array = [10, 20];
console.log(array[0]);
console.log(array[1]);

const [a, b] = [10, 20];
console.log(a);

// spread operator =========================================
// digunakan utk mengcopy isi object / menggabungkan object

const objectOne = { name: "jacky", password: "Admin123" };
const objectTwo = { email: "email@mail.com", name: "pepeng" };

const result = { ...objectOne, ...objectTwo };
console.log(result);

// THIS KEYWORD ============================================
// mengakses property lain di dalam sebuah object

const person5 = {
  firstName: "aceng",
  lastName: "racing",
  greet() {
    console.log(`Hello, ${this.firstName} ${this.lastName}`);
  },
};
person5.greet();

// CLASS ===================================================
// template / cetakan untuk membuat sebuah object
// penamaan class harus dengan huruf besar
// class declaration
class User3 {
  greeting() {
    console.log("Hello world");
  }
}
// class expression
const User4 = class {
  greeting() {
    console.log("Hello world");
  }
};

// membuat object dari class

const human = new User3();
const human2 = new User3();
human.greeting();
human2.greeting();

// CONSTRUCTOR =============================================
// method bawaan dari class yang akan dijalankan pertama kali saat membuat object baru menggunakan template class

class Person6 {
  name: string;
  hobby: string;
  #email: string; // # utk private ke properti

  constructor(name: string, email: string) {
    this.name = name;
    this.hobby = "";
  }

  greeting() {
    console.log(`Hello, ${this.name}`);
    return `Hello ${this.name}`;
  }

  // methode ini hanya bisa diakses dalam class ini saja
  private showEmail() {
    console.log(this.#email);
  }

  sendEmail() {
    return this.showEmail;
  }
}

const orang3 = new Person6("Budi", "budi@mail.com");
console.log(orang3.greeting());

console.log(orang3.name);
// orang3.showEmail() //methode private, tdk bisa diakse
// console.log(orang3.#email); //gak bakal bisa diakese karena email private

// ACCESS MODIFIER -> public & private

// GETTER &SETTER
// get -> baca data
// set -> set value dalam object

const orang4 = {
  firstName: "ujang",
  lastName: "racing",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(value) {
    // add more logic
    const split = value.split(" ");
    this.firstName = split[0];
    this.lastName = split[1];
  },
  fullName2(value: string) {
    const split = value.split("");
    this.firstName = split[0];
    this.lastName = split[1];
  },
};

// ENCAPSULATION==========================================
// konsep di oop utk ngebundle data dalam 1 unit
// contohnya adalah class dan object

// INHERITANCE ============================================
// pewarisan dari parent class ke child class
// properti dan method dari parent class bisa diakses oleh child class

class Product {
  productName: string;
  price: number;

  constructor(name: string, price: number) {
    this.productName = name;
    this.price = price;
  }
  readPrice() {
    console.log(this.price);
    return "Rp" + this.price.toLocaleString("id=ID");
  }
}

// tidak menggunakan konsep inheritance
// class Book {
//   productName: string;
//   price: number;
//   author: string;

//   constructor(name: string, price: number, author: string) {
//     this.productName = name;
//     this.price = price;
//     this.author = author;
//   }
// }

// menggunakan konsep inheritance
class Book extends Product {
  author: string;

  constructor(name: string, price: number, author: string) {
    super(name, price);
    this.author = author;
  }
}

const buku = new Book("Cara Jago Ngoding", 100_000, "Aceng");

console.log(buku.productName);
console.log(buku.price);
console.log(buku.author);

// INSTANCE OF===============================================
// mengecek apakah sebuah object memiliki hubungan ke class tertentu

class Animal {}
class Rabbit extends Animal {}
class Tree {}

const rabbit = new Rabbit();

console.log(rabbit instanceof Animal);
console.log(rabbit instanceof Rabbit);
console.log(rabbit instanceof Tree);

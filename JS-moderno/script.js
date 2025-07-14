//ativar o modo estrito que serve para evitar erros
"use strict"

function showMessage(){

    let personName = "Fernando"

    console.log("Hello " + personName)
}

showMessage()

class Student {

    get point(){
        return 7
    }
}

const student = new Student()
console.log(student.point)

const data = ["Fernando", "Feh", "Pegoraro"]

//desestruturando o array
const [firstName, middleName, lastName] = data
console.log("nome: " + firstName + " " + middleName + " " + lastName)

const fruits = ["apple", "banana", "orange"]
//Desestruturar apenas o primeiro
const [apple] = fruits
console.log("apple: " + apple)

//Pegar a segunda
const [_,banana] = fruits
console.log("banana: " + banana)

//Pegar a terceira
const [,,orange] = fruits
console.log("orange: " + orange)

//Desestruturar objetos
const product = {
    name: "Teclado",
    price: 100,
    color: "Azul"
}

const {name, price, color} = product
console.log("name: " + name + " price: " + price + " color: " + color)

function newProduct(product){
    console.log("name: " + product.name + " price: " + product.price + " color: " + product.color)
}

newProduct({
    name: "mouse",
    price: 50,
    color: "Preto"
})

//Rest params

function values(...rest){
    console.log(rest)
}
values(1,2,3,4,5)

//Spread operator
const numbers = [1,2,3,4,5]
console.log(...numbers) 










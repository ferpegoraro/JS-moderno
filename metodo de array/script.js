//método map
const products = ["Teclado", "Mouse", "Monitor", "Gabinete"]

//percorrendo o array com map
products.map((product) => {
    console.log(product)
})

//sintexe reduzida
products.map((product) => console.log(product))

const formatted  = products.map((product) => product.toUpperCase())
console.log(formatted)

const productsFormatted = products.map((product)=> {
    return {
        name: product,
        price: 100,
    }
})
console.log(productsFormatted)

//Filter

//metodo filter, retorna um novo array
const words = ["abacaxi", "banana", "uva", "morango", "manga"]
const result = words.filter((word) => word.length > 3)
console.log(result)

const filterProducts =[
    {name: "Teclado", price: 100, promotion: true},
    {name: "Mouse", price: 50, promotion: false},
    {name: "Monitor", price: 200, promotion: true},
    {name: "Gabinete", price: 150, promotion: false},
]

const promotion = filterProducts.filter((filterProduct) => filterProduct.promotion === true)
console.log(promotion)

//metodo findIndex, retorna o index do elemento
const index = products.findIndex((product) => product === "Mouse")
console.log(index)

//método find, caso nao encontre retorna undefined
const productsFind = products.find((product) => product === "Mouse")
console.log(productsFind)

//metodo every, retorna true ou false
const every = products.every((product) => product === "Mouse")
console.log(every)

//metodo some, retorna true ou false
const some = products.some((product) => product === "Mouse")
console.log(some)

//metodo sort, ordena o array

// Ordenação alfabética padrão (converte elementos para string)
console.log("\nOrdenação alfabética padrão:")
const sortedAlphabetically = [...products].sort()
console.log(sortedAlphabetically)

// Ordenação alfabética reversa
console.log("\nOrdenação alfabética reversa:")
const sortedReverse = [...products].sort().reverse()
console.log(sortedReverse)

// Ordenação por tamanho da string (do menor para o maior)
console.log("\nOrdenação por tamanho da string:")
const sortedByLength = [...products].sort((a, b) => a.length - b.length)
console.log(sortedByLength)

// Exemplo com números
const numbers = [10, 5, 40, 25, 1000, 1]

// Ordenação incorreta para números (converte para string)
console.log("\nOrdenação incorreta de números:")
const wrongSortedNumbers = [...numbers].sort()
console.log(wrongSortedNumbers)

// Ordenação correta para números (crescente)
console.log("\nOrdenação correta de números (crescente):")
const sortedNumbers = [...numbers].sort((a, b) => a - b)
console.log(sortedNumbers)

// Ordenação correta para números (decrescente)
console.log("\nOrdenação correta de números (decrescente):")
const sortedNumbersDesc = [...numbers].sort((a, b) => b - a)
console.log(sortedNumbersDesc)

// Exemplo com objetos
const items = [
  { name: "Monitor", price: 200 },
  { name: "Teclado", price: 100 },
  { name: "Mouse", price: 50 },
  { name: "Gabinete", price: 150 }
]

// Ordenação por preço (crescente)
console.log("\nOrdenação de objetos por preço (crescente):")
const sortedByPrice = [...items].sort((a, b) => a.price - b.price)
console.log(sortedByPrice)

// Ordenação por nome (alfabética)
console.log("\nOrdenação de objetos por nome:")
const sortedByName = [...items].sort((a, b) => a.name.localeCompare(b.name))
console.log(sortedByName)

//reduce - acumula valores de um array em um único resultado

// Exemplo 1: Soma de todos os números
console.log("\nReduce - Soma de números:")
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(`Soma dos números [${numbers}] = ${sum}`)

// Exemplo 2: Concatenação de strings
console.log("\nReduce - Concatenação de strings:")
const concatenated = products.reduce((acc, product) => acc + ", " + product)
console.log(concatenated)

// Exemplo 3: Calculando o valor total de produtos
console.log("\nReduce - Valor total de produtos:")
const totalPrice = items.reduce((total, item) => total + item.price, 0)
console.log(`Valor total dos produtos: R$ ${totalPrice}`)

// Exemplo 4: Agrupando por categoria
console.log("\nReduce - Agrupando objetos:")
const itemsWithCategory = [
  { name: "Monitor", price: 200, category: "Periféricos" },
  { name: "Teclado", price: 100, category: "Periféricos" },
  { name: "Mouse", price: 50, category: "Periféricos" },
  { name: "Processador", price: 800, category: "Hardware" },
  { name: "Memória RAM", price: 300, category: "Hardware" }
]

const groupedByCategory = itemsWithCategory.reduce((groups, item) => {
  // Se a categoria não existir no objeto acumulador, cria um array vazio para ela
  if (!groups[item.category]) {
    groups[item.category] = []
  }
  // Adiciona o item ao array da categoria correspondente
  groups[item.category].push(item)
  return groups
}, {})

console.log(groupedByCategory)

/* RESUMO DOS MÉTODOS DE ARRAY

map() - Cria novo array transformando cada elemento
filter() - Cria novo array com elementos que passam no teste
findIndex() - Retorna índice do primeiro elemento que satisfaz condição
find() - Retorna o primeiro elemento que satisfaz condição
every() - Retorna true se TODOS os elementos satisfazem condição
some() - Retorna true se PELO MENOS UM elemento satisfaz condição
sort() - Ordena o array (modifica o original)
  - Sem função: ordena alfabeticamente (converte para string)
  - Com função de comparação: (a, b) => a - b (crescente) ou (a, b) => b - a (decrescente)
reduce() - Acumula valores de um array em um único resultado
  - Sintaxe: array.reduce((acumulador, valorAtual) => expressão, valorInicial)
  - Útil para: somas, concatenações, agrupamentos e transformações complexas
*/



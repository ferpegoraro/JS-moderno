//Imutabilidade

const address1 = {
  street: "Rua A",
  number: 20,
}

//Isso não é uma copia, é uma referencia
//const address2 = address1
//address2.number = 10
//console.log(address1)
//console.log(address2)

//Estamos criando um novo objeto utilizando as propriedades e valores de address 1

//Opção 1
//const address2 = {...address1}
//address2.number = 10
//console.log(address1)
//console.log(address2)

//Opção 2
const address2 = {...address1, number: 10}
console.log(address1)
console.log(address2)

//exemplo com array
const fruits = ['apple', 'banana', 'orange']
const fruits2 = [...fruits]
fruits2.push('grape')
console.log(fruits)
console.log(fruits2)

//Shallow e deep copy

const htmlCourse = {
  course: "HTML",
  students: [{name: "Fernando", email: "fernandopbilia2304@gmail.com"}]
}

const jsCourse = {
  ...htmlCourse,
  course: "JavaScript",
  students: [...htmlCourse.students]
}

console.log(htmlCourse, jsCourse)


jsCourse.students.push({name: "Maria", email: "maria@gmail.com"})
console.log(htmlCourse, jsCourse)

//Shallow freezing
Object.freeze(htmlCourse)

//Deep freezing - exemplo
function deepFreeze(obj) {
  // Recupera os nomes de propriedades definidos no objeto
  const propNames = Object.getOwnPropertyNames(obj);
  
  // Congela as propriedades antes de congelar o objeto principal
  for (const name of propNames) {
    const value = obj[name];
    
    // Congela recursivamente se a propriedade for um objeto não nulo
    if (value && typeof value === "object" && !Object.isFrozen(value)) {
      deepFreeze(value);
    }
  }
  
  // Congela o próprio objeto
  return Object.freeze(obj);
}

// Exemplo de uso do deep freezing
const pessoa = {
  nome: "João",
  endereco: {
    rua: "Avenida Principal",
    numero: 123
  }
};

// Aplicando deep freezing
deepFreeze(pessoa);

// Tentativas de modificação falharão
console.log("Antes da tentativa de modificação:", pessoa);
try {
  pessoa.nome = "Maria";
  pessoa.endereco.rua = "Nova Rua";
} catch (e) {
  console.log("Erro ao tentar modificar objeto congelado (em modo estrito)")
}
console.log("Depois da tentativa de modificação:", pessoa);
// Note que em modo não-estrito, as modificações são silenciosamente ignoradas

//deep freezing



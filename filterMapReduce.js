//Filter

let products = [
  { id: 1, name: "maracujá", price: 39 },
  { id: 2, name: "banana", price: 203 },
  { id: 3, name: "abacaxi", price: 499 }
]
console.log(products.filter(element => element.price > 100))

//construção de um filter
const biggerThan = value => value.price > 100
const findFruit = (array, filter) => {
  const condition = []
  for (const element of array) {
    if (filter(element))
      condition.push(element)
  }
  return condition
}

console.log(findFruit(products, biggerThan))


// Map 

let products = [
  { id: 1, name: "maracujá", price: 39 },
  { id: 2, name: "banana", price: 203 },
  { id: 3, name: "abacaxi", price: 499 }
]

console.log(products.map(element => element.price * 0.9))
console.log(products.map(element => ({ id: element.id })))

let people = [
  { name: "Angelina", age: 23 },
  { name: "Tony", age: 12 },
  { name: "Steve", age: 5 },
  { name: "Loise", age: 21 },
  { name: "Zoe", age: 18 }
]


const mayDrink = people.map(person => person.age >= 18
  ? `${person.name} can drink`
  : `${person.name} is under age`
)

console.log(mayDrink)



//REDUCE
let array = [10, 3, 6, 2, 3, 12]
console.log(array.reduce((acc, current) => {
  return acc + current
}, 0
))

console.log(array.reduce((acc, current) => ({ soma: acc.soma + current }
), { soma: 0 }
))


//Construindo um reduce
//redeuce de somas
let array = [10, 3, 6, 2, 3, 12]
const imitateReduce = (array, initialValue) => {
  let currentNumber = initialValue
  for (value of array) {
    currentNumber += value
  }
  return currentNumber
}

console.log(imitateReduce(array, 0))

//imitação de reduce mais consistente
let array = [10, 3, 6, 2, 3, 12]
Array.prototype.myreduce = function (callbackFn, initialValue) {
  let acc = initialValue
  for (const element of this) {
    acc = callbackFn(acc, element)
  }
  return acc
}

console.log(array.myreduce((acc, current) => acc * current, 1))


//Retornando a média de idade de alunos que passaram de duas maneiras, utilizando os métodos a cima

let students = [
  { score: 10, name: 'Fulano', age: 25 },
  { score: 7, name: 'Ciclano', age: 22 },
  { score: 5, name: 'Roberto', age: 36 },
  { score: 9, name: 'Claudio', age: 41 },
  { score: 2, name: 'Maria', age: 32 },
  { score: 9, name: 'Joana', age: 17 }
]


const media = students
  .filter(student => student.score >= 7)
  .reduce(
    (acc, current) => ({ averageAge: acc.averageAge + current.age / (students.filter(n => n.score >= 7).length) }),
    { averageAge: 0 })

console.log(media)


//utilizando apenas reduce para que não tenha-se 2 loops percorridos

let students2 = [
  { score: 10, name: 'Fulano', age: 25 },
  { score: 7, name: 'Ciclano', age: 22 },
  { score: 5, name: 'Roberto', age: 36 },
  { score: 9, name: 'Claudio', age: 41 },
  { score: 2, name: 'Maria', age: 32 },
  { score: 9, name: 'Joana', age: 17 }
]


const media2 = students2
  .reduce(
    (acc, student) =>
      student.score >= 7 ?
        ({
          acumulado: acc.acumulado + student.age,
          count: acc.count + 1,
          media: (acc.acumulado + student.age) / (acc.count + 1)
        })
        : acc,
    { acumulado: 0, count: 0, media: 0 }
  )

console.log(media2)



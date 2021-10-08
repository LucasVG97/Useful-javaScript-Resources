
//Retornando a soma dos pares com uso de for of

const pairSum = (array) => {
  let sum = 0
  for (let index of array) {
    if (index % 2 === 0) {
      sum += index
    }
  }
  return sum
}

console.log(pairSum([1, 4, 5, 10]))


//Retornando propriedades de objetos, com uso de for in e for of

//for in
const employees = [{ name: "lucas", age: 23 }, { name: "Pedro", age: 11 }]

const employeeName = employee => {
  let employeeNames = []
  for (let property in employee) {
    employeeNames.push(employee[property].name)
  }
  return employeeNames
}

console.log(employeeName(employees))

//for of

const employees = [{ name: "lucas", age: 23 }, { name: "Pedro", age: 11 }]
const employeeName = employee => {
  let employeeNames = []
  for (let property of employee) {
    employeeNames.push(property.name)
  }
  return employeeNames
}

console.log(employeeName(employees))

//Utilizando função de alta ordem para representar a funcionalidade de every e some
//situação inicial
let people = [
  {
    name: "Marcos",
    age: 23
  },
  {
    name: "João",
    age: 10
  }
]

console.log(people.every(
  person => person.age > 18
))


console.log(people.some(
  person => person.age > 18
))

//every e some utilizando high order function

const verifyAge = person => person.age > 18

//construindo every

let people = [
  {
    name: "Marcos",
    age: 23
  },
  {
    name: "João",
    age: 10
  },
  {
    name: "Maria",
    age: 19
  }
]


function every(array, callbackFn) {
  for (const value of array) {
    if (!callbackFn(value))
      return false;
  }
  return true
}

console.log(every(people, verifyAge))

//construindo some

function some(array, callbackFn) {
  for (const value of array) {
    if (callbackFn(value))
      return true;
  }

  return false
}

console.log(some(people, verifyAge))


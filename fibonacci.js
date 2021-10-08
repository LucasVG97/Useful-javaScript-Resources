const fibonacci = (size) => {
  let result = [0, 1]
  if (size <= 0)
    return "invalid size"
  if (size === 1) {
    return [0]
  }
  for (let i = 2; i < size; i += 1) {
    result.push(result[i - 2] + result[i - 1])
  }

  return result

}

console.log(fibonacci(0))
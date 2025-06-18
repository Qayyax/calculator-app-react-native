// would export varios calculation logic
// it should take an array
// check for the expression, 
// or better still, it would be a loop, 
// when it gets * or any other expression, 
// it should solve, something like that, 
// let string = ""
// string += value
// if expression
// string before expression <expression> string after expression <expre> string
// solve

const calculateExpression = (expression: string): string => {
  //[4, 5, 23, *, 12, 23, 23, 23 * 23]
  let newExpression = expression.replaceAll("\u{00D7}", "*");
  newExpression = newExpression.replaceAll("\u{00F7}", "/")
  let answer = eval(newExpression)
  console.log(`Expresssion: ${newExpression} \n Answer: ${answer}`)
  return String(answer);
}

export { calculateExpression };

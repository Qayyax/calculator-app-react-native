const calculateExpression = (expression: string): string => {
  // TODO: work on +/- to have ()
  if (/\d$/.test(expression) || /%$/.test(expression)) {
    let newExpression = expression.replaceAll("\u{00D7}", "*");
    newExpression = newExpression.replaceAll("\u{00F7}", "/")
    newExpression = newExpression.replaceAll("%", "/100")
    let answer = eval(newExpression)
    console.log(`Expresssion: ${newExpression} \n Answer: ${answer}`)
    return String(answer);

  }
  return expression
}

export { calculateExpression };

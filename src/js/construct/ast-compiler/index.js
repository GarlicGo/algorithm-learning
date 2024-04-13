/**
 * https://juejin.cn/post/7155151377013047304/#heading-13
 */
function compiler(input) {
  //生成tokens
  const tokens = tokenizer(input);
  //生成ast
  const ast = parser(tokens);
  //拿到新的ast
  const newAst = transformer(ast);
  //生成新代码
  const output = codeGenerator(newAst);

  return {
    input,
    tokens,
    ast,
    newAst,
    output,
  };
}

const input = '(add 2 (subtract 4 2))';
const results = compiler(input);
console.log(results); // add(2, subtract(4, 2));

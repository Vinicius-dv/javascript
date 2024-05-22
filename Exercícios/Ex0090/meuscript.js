const mat = document.getElementById('mat')
// ele vai me retornar um numero entre 0 e 100 , para eu gerar entre 1 e 10 eu uso o floor , se fosse o round ele me geraria um valor entre 1 e 11 , ja o random não pq eu passo um numero para ele gerar e ele sempre vai pegar um numero a menos 
mat.innerHTML = Math.floor(Math.random()*10)+1









/*
  Propriedades da Classe Math em JavaScript:

  Math.E          - Constante de Euler, aproximadamente 2.718.
  Math.LN2        - Logaritmo natural de 2, aproximadamente 0.693.
  Math.LN10       - Logaritmo natural de 10, aproximadamente 2.302.
  Math.LOG2E      - Logaritmo de E na base 2, aproximadamente 1.442.
  Math.LOG10E     - Logaritmo de E na base 10, aproximadamente 0.434.
  Math.PI         - Constante pi, aproximadamente 3.14159.
  Math.SQRT1_2    - Raiz quadrada de 1/2, aproximadamente 0.707.
  Math.SQRT2      - Raiz quadrada de 2, aproximadamente 1.414.

  Métodos da Classe Math em JavaScript:

  Math.abs(x)         - Retorna o valor absoluto de x.
  Math.acos(x)        - Retorna o arco cosseno de x, em radianos.
  Math.asin(x)        - Retorna o arco seno de x, em radianos.
  Math.atan(x)        - Retorna o arco tangente de x, em radianos.
  Math.atan2(y, x)    - Retorna o arco tangente do quociente dos seus argumentos.
  Math.ceil(x)        - Retorna o menor número inteiro maior ou igual a x.
  Math.cos(x)         - Retorna o cosseno de x (x em radianos).
  Math.exp(x)         - Retorna E elevado à potência de x.
  Math.floor(x)       - Retorna o maior número inteiro menor ou igual a x.
  Math.log(x)         - Retorna o logaritmo natural (base E) de x.
  Math.max(...values) - Retorna o maior número de um conjunto de números.
  Math.min(...values) - Retorna o menor número de um conjunto de números.
  Math.pow(base, exp) - Retorna base elevado ao expoente (base^exp).
  Math.random()       - Retorna um número pseudo-aleatório entre 0 (inclusive) e 1 (exclusivo).
  Math.round(x)       - Retorna o valor de x arredondado para o inteiro mais próximo.
  Math.sin(x)         - Retorna o seno de x (x em radianos).
  Math.sqrt(x)        - Retorna a raiz quadrada de x.
  Math.tan(x)         - Retorna a tangente de x (x em radianos).
  Math.trunc(x)       - Retorna a parte inteira de x, removendo qualquer fração.
*/
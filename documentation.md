### Documentação para consulta própria sobre o sistema de postagens

As postagens da página são renderizadas a partir de json's armazenados no banco de dados.

Programei alguns detalhes adicionais para facilitar o trabalho na hora de escrever meus posts, adicionando
dinâmicamente textos, tópicos, blocos de códigos estilizados, etc. conforme é possível ver nos arquivos de
nome começados por "render", presentes em "src/pages/PostView".

O código do conversor basicamente lê o arquivo json e cria componentes para o React renderizar, por exemplo:
se eu estiver escrito um tópico, ele irá aumentar o tamanho da fonte e alterar a cor, assim como adicionar
o tópico ao sumário.

## Estrutura do JSON

O arquivo json deverá ter as seguintes chaves:
``` json
{
  "keyword": "a tecnologia/área abordada no post",
  "title": "título do post",
  "date": "data da postagem",
  "description": "breve descrição sobre o assunto abordado no post que será exibido no card",
  "backgroundImageUrl": "url da imagem principal que será exibida dentro do post",
  "content": ["um array de strings", "onde cada string será concatenada e exibida no post"]
}
```

## Documentação do conversor

Ao escrever o content (chave do objeto citado no tópico acima), você poderá usar palavras reservadas.
O caractere especial que definirá esta palavra especial é a porcentagem (%)

O caractere especial só será reconhecido se for usado no começo de uma string do array, exemplo:
``` json
[
  "Escrevendo o %TOPIC aqui não fará efeito.",
  "%TOPIC Aqui sim!"
]
```

### Palavras reservadas disponíveis

Obs.: as palavras reservadas precisam ser escritas em um novo espaço do array, começando com seu nome e seus parâmetros (se houver).
Exemplo:

### Modo errado:
``` json
[
  "%PALAVRA_RESERVADA Lorem ipsum %PALAVRA_RESERVADA"
]

```
### Modo correto:
``` json
[
  "%PALAVRA_RESERVADA",
  "Lorem ipsum",
  "%PALAVRA_RESERVADA"
]
```

``` %TEXT ``` é usado para declarar que as próximas linhas serão um texto (códigos HTML também serão exibidos como um texto).
Precisa de fechamento.
- Exemplo:
``` json
[
  "%TEXT",
  "Eu sou um texto"
  "%TEXT"
]
```

``` %HTML ``` o mesmo que %TEXT, porém é usado para declarar que as próximas linhas se comportarão como um HTML.
Precisa de fechamento.
- Exemplo:
``` json
[
  "%HTML",
  "<bold>Eu sou uma tag bold</bold>"
  "%HTML"
]
```

``` %TOPIC ``` é usado para declarar um tópico da postagem, não precisa ser fechado, e o tópico deverá ser escrito após um espaço na mesma linha, por exemplo:
``` json
[
  "%TOPIC Eu sou um tópico da postagem",
  "%TEXT",
  "Sou um texto",
  "%TEXT"
]
```

``` %CODE ``` é usado para declarar um bloco de código que deverá ser formatado e deve ser fechado, igual o %TEXT.
Esta palavra reservada precisa de parâmetros, que precisam ser escritos com um espaço entre eles.
Precisa de fechamento.

### Parâmetros obrigatórios:
``` language ``` = a linguagem relativa ao código que será escrito
> language=typescript

### Parâmetros opcionais:
``` highlightLines ``` = as linhas, separadas por vírgulas e sem espaço, que devem ser destacadas no código
> highlightLines=5,6,7

## Exemplo de tudo junto:
``` json
"content": [
  "%TOPIC Como escrever uma arrow function",
  
  "%HTML",
  "Veja o código <bold>abaixo</bold>:",
  "%HTML",

  "%CODE language=typescript highlightLines=1",
  "const arrowFunction = () => console.log('Sou uma Arrow Function!')",
  "%CODE"
]
```

## Como adicionar a postagem:
Usando o prisma studio, você pode adicionar uma nova linha, que precisará de um slug (precisa ser
único entre todos os outros registros) e o json com todas as informações citadas anteriormente.
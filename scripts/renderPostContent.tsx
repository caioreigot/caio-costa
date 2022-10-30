import { CodeBlock } from '../components';
import generateId from './utils/generateId';
import prettier from 'prettier/standalone';

import parserTypeScript from 'prettier/parser-typescript';
import parserHtml from 'prettier/parser-html';

export default function renderPostContent(
  postContent: string[],
  textColor: string
) {
  const jsxElements: JSX.Element[] = [];

  const jsonConverter = {
    currentParameters: {} as any,
    isWritingText: false,
    isWritingCode: false,
    textBuffer: ''
  };

  function addStyledText(text: string, addAsHtml: boolean) {
    const className = 'text-lg text-left mt-6';
    const key = jsxElements.length;

    const pElement = addAsHtml
      ? <p className={className} dangerouslySetInnerHTML={{ __html: text }} key={key}></p>
      : <p className={className} key={key}>{text}</p>; 

    jsxElements.push(pElement);
  }

  function addStyledTopic(topic: string) {
    const id = generateId(topic);

    jsxElements.push(
      <h2 className={`text-3xl font-bold tracking-tight ${textColor} pt-10`} id={id} key={jsxElements.length}>
        {topic}
      </h2>
    );
  }

  function addStyledCode(code: string) {
    const language = jsonConverter.currentParameters.language;

    const parser = (function() {
      switch (language) {
        case 'typescript':
          return parserTypeScript;
        case 'html':
          return parserHtml;
        default:
          return null;
      }
    })();

    /* Formatar com o prettier caso exista um parser para a linguagem,
    caso contrário, usa a pŕopria string passada, sem formatar */
    const codeString = parser 
      ? prettier.format(code, { semi: true, parser: language, plugins: [parser] })
      : code;

    const codeTitle = jsonConverter.currentParameters.title?.split(',');
    const highlightLines = jsonConverter.currentParameters.highlightLines?.split(',');

    jsxElements.push(
      <CodeBlock
        title={codeTitle}
        language={language}
        codeString={codeString}
        highlightLines={highlightLines}
        className="my-5"
        key={jsxElements.length} 
      />
    );

    // Limpa os parâmetros
    jsonConverter.currentParameters = {};
  }

  // Iterando por todas as linhas do content
  postContent.forEach((line: string) => {
    // Se a linha começar com um sc (special character), tratar de forma diferente
    if (line[0] === '%') {
      const variableContext = line.split(' ')[0];

      switch (variableContext) {
        case '%TEXT':
          jsonConverter.isWritingText = !jsonConverter.isWritingText;

          // Se a variável se tornou falsa, é porque o texto terminou
          if (!jsonConverter.isWritingText) {
            addStyledText(jsonConverter.textBuffer, false);
          }

          break;
        case '%HTML':
          jsonConverter.isWritingText = !jsonConverter.isWritingText;

          // Se a variável se tornou falsa, é porque o texto terminou
          if (!jsonConverter.isWritingText) {
            addStyledText(jsonConverter.textBuffer, true);
          }

          break;
        case '%TOPIC':
          const topic = line.replace(variableContext, '').trimStart();
          addStyledTopic(topic);
          
          break;
        case '%CODE':
          jsonConverter.isWritingCode = !jsonConverter.isWritingCode;

          // Se parou de escrever código, adiciona o mesmo para ser renderizado
          if (!jsonConverter.isWritingCode) {
            addStyledCode(jsonConverter.textBuffer);
            break;
          }

          /* Se acabou de chegar em uma linha de código, pega os
          parametros e os salva como um objeto */
          if (jsonConverter.isWritingCode) {
            const parametersString = line.substring(line.indexOf(' ') + 1);
            const objectArray = parametersString.split(' ').map((s: string) => s.split('='));
            objectArray.forEach((arr: string[]) => jsonConverter.currentParameters[arr[0]] = arr[1]);
          }

          break;
      }

      // Limpa o buffer para começar a escrever em outro contexto
      jsonConverter.textBuffer = '';

      // Retorna para ir à próxima iteração
      return;
    }

    // Concatena uma nova linha com um espaço atrás
    jsonConverter.textBuffer += ` ${line}`;
  });

  // Retorna todos os elementos JSX para serem renderizados
  return jsxElements;
}
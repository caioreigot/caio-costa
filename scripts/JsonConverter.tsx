import { CodeBlock } from '../components';
import Image from 'next/image';
import generateId from './utils/generateId';
import prettier from 'prettier/standalone';
import parserTypeScript from 'prettier/parser-typescript';
import parserHtml from 'prettier/parser-html';

export default class JsonConverter {
  private _id: number = 0;
  private postContent: string[];
  private textColor: string;
  private textBuffer: string = '';
  private parameters: any = {};
  private isWritingText: boolean = false;
  private isWritingCode: boolean = false;
  private isWritingClose: boolean = false;

  private get id() {
    return this._id++;
  }

  constructor(postContent: string[], textColor: string) {
    this.postContent = postContent;
    this.textColor = textColor;
  }

  private createText(text: string, addAsHtml: boolean, isWritingClose: boolean = false) {
    const className = `text-lg text-left break-words ${isWritingClose ? 'mt-1' : 'mt-6'}`;

    const pElement = addAsHtml
      ? <p className={className} dangerouslySetInnerHTML={{ __html: text }} key={this.id}></p>
      : <p className={className} key={this.id}>{text}</p>;

    return pElement;
  }

  private createTopic(topic: string) {
    const topicId = generateId(topic);

    return (
      <h2
        className={`text-3xl font-bold tracking-tight ${this.textColor} pt-10`}
        key={this.id}
        id={topicId}
      >
        {topic}
      </h2>
    );
  }

  private createImage(imagePublicPath: string, height: string) {
    return (
      <div className="my-6 relative w-full rounded overflow-hidden" style={{ height: height }} key={this.id}>
        <Image src={imagePublicPath} alt="" fill={true} />
      </div>
    );
  }

  private createCode(code: string, parameters: any) {
    const language = parameters?.language;

    const parser = (function () {
      switch (language) {
        case 'typescript': return parserTypeScript;
        case 'html': return parserHtml;
        default: return null;
      }
    })();

    /* Formatar com o prettier caso exista um parser para a linguagem,
    caso contrário, usa a pŕopria string passada, sem formatar */
    const codeString = parser
      ? prettier.format(code, { semi: true, parser: language, plugins: [parser] })
      : code;

    const codeTitle = parameters.title?.split(',');
    const highlightLines = parameters.highlightLines?.split(',');

    return (
      <CodeBlock
        className="my-5"
        title={codeTitle}
        language={language}
        codeString={codeString}
        highlightLines={highlightLines}
        key={this.id}
      />
    );
  }

  private clearTextBuffer() {
    this.textBuffer = '';
  }

  private getParameters(line: string) {
    const parametersString = line.substring(line.indexOf(' ') + 1);
    const objects = parametersString.split(' ').map((s: string) => s.split('='));
    const parameters: any = {};
    objects.map(object => { parameters[object[0]] = object[1]; });

    return parameters;
  }

  public getJsxElements(): JSX.Element[] {
    const jsxElements: JSX.Element[] = [];

    // Iterando por todas as linhas do content
    this.postContent.forEach((line: string) => {
      // Se a linha começar com um sc (special character), tratar de forma diferente
      if (line[0] === '%') {
        const variableContext = line.split(' ')[0];

        switch (variableContext) {
          case '%TEXT':
            this.isWritingText = !this.isWritingText;

            // Se a variável se tornou falsa, é porque o texto terminou
            if (!this.isWritingText) {
              const textJsx = this.createText(this.textBuffer, false);
              jsxElements.push(textJsx);
            }
            break;

          case '%CLOSETOP':
            this.isWritingClose = !this.isWritingClose;
            break;

          case '%TOPIC':
            const topic = line.replace(variableContext, '').trimStart();
            const topicJsx = this.createTopic(topic);
            jsxElements.push(topicJsx);
            break;

          case '%IMAGE':
            const parameters = this.getParameters(line);
            const imageJsx = this.createImage(parameters.src, parameters.height);
            jsxElements.push(imageJsx);
            break;

          case '%CODE':
            this.isWritingCode = !this.isWritingCode;

            // Se parou de escrever o código, renderiza ele na tela
            if (!this.isWritingCode) {
              const codeJsx = this.createCode(this.textBuffer, this.parameters);
              jsxElements.push(codeJsx);

              // Limpa os parâmetros salvos
              this.parameters = {};
              break;
            }

            /* Se acabou de chegar em uma linha de código, pega os
            parametros e os salva como um objeto */
            if (this.isWritingCode) {
              this.parameters = this.getParameters(line);
            }

            break;
        }

        // Limpa o buffer para começar a escrever em outro contexto
        this.clearTextBuffer();

        // Retorna para ir à próxima iteração
        return;
      }

      // Adicina a linha ao buffer com um espaço atrás
      this.textBuffer += ` ${line}`;

      if (!this.isWritingCode && !this.isWritingText) {
        jsxElements.push(this.createText(line, true, this.isWritingClose));
      }
    });

    return jsxElements;
  }
}
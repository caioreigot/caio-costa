import dracula from 'react-syntax-highlighter/dist/cjs/styles/hljs/dracula';
import SyntaxHighlighter from 'react-syntax-highlighter';

interface CodeBlockProps {
  title: string | null;
  language: string;
  codeString: string;
  className: string;
  highlightLines?: number[];
}

/**
 * Destaca as linhas do SyntaxHighlight
 * @param {HTMLElement} container o elemento HTML pai do componente react "SyntaxHighlighter"
 * @param {number[]} highlightLines um array que recebe os números das linhas que serão destacadas
 */
function highlightLines(container: HTMLElement, highlightLines: number[]) {
  highlightLines?.forEach(lineNumber => {
    const spanToHighlight: HTMLElement | null = container.querySelector(`code > span:nth-child(${lineNumber})`);
    
    if (!spanToHighlight) {
      console.warn('Não foi possível encontrar a linha para aplicar o destaque.');
      return;
    }

    spanToHighlight.classList.add('block', 'w-full', 'bg-blue-highlight');
  });
}

export default function CodeBlock(props: CodeBlockProps) {
  return (
    <div className={`flex flex-col overflow-hidden ${props.className ?? ''}`}>
      {props.title &&
        <p className="w-full px-6 py-2 md:py-1 bg-blue-3 text-blue">{props.title}</p>
      }
      <div ref={el => el && props.highlightLines && highlightLines(el, props.highlightLines)} className="relative p-4 bg-blue-1">
        <SyntaxHighlighter style={dracula} wrapLines={true} className="custom-horizontal-scrollbar w-full" language={props.language}>
          {props.codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
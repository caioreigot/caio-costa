import makeAnimation from './makeAnimation';

/* 
  Adiciona o observer para chamar a função de play da animação quando o usuário
  descer a barra de rolagem até ver X por cento do elemento (threshold)
*/
export default function setupNavBarAnimation(
  navBarHtmlElement: HTMLElement,
  nameHtmlElement: HTMLElement,
  cursorHtmlElement: HTMLElement,
  name: string,
  nameWidth: number
) {
  const options: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 0.4
  };

  const playAnimationWhenVisibleCallback: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        playNavBarAnimation(nameHtmlElement, cursorHtmlElement, name, nameWidth);
        observer.unobserve(entry.target);
      }
    });
  };

  const startAnimationWhenVisibleObserver = new IntersectionObserver(
    playAnimationWhenVisibleCallback, options
  );

  startAnimationWhenVisibleObserver.observe(navBarHtmlElement);
}

function playNavBarAnimation(
  nameHtmlElem: HTMLElement,
  cursorHtmlElem: HTMLElement,
  name: string,
  nameWidth: number
) {
  // Move o "cursor" da esquerda do nome para a direita
  const translateTypeCursorToRight = () => 
    cursorHtmlElem!.style.transform = `translateX(${nameWidth + 12}px)`;

  // Adiciona as palavras aos poucos junto com o passar do cursor
  const makeTypingEffectInName = () => { 
    for (let i = 0; i < name.length; i++) {
      setTimeout(() => {
        nameHtmlElem!.innerHTML += name[i];
      }, i * 50);
    }
  };

  const fadeOutOpacity = () => cursorHtmlElem!.style.opacity = '0';

  cursorHtmlElem.style.opacity = '1';
  makeAnimation(translateTypeCursorToRight, 400)
    .then(_ => makeAnimation(makeTypingEffectInName, 200))
    .then(_ => makeAnimation(fadeOutOpacity, 1000));
}
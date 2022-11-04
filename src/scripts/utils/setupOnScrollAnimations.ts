/**
 * Cria um observer que adicionará a classe "active" aos elementos
 * que contenham algum tipo de animação, para então serem animados
 * somente quando o usuário estiver os vendo.
 */
export default function setupOnScrollAnimations() {
  const onScrollAnimations: HTMLElement[] = [
    ...document.querySelectorAll<HTMLElement>('.enter-animation'),
    ...document.querySelectorAll<HTMLElement>('.fill-animation')
  ];

  // Callback que adiciona a classe "active" no elemento vísivel
  const addActiveClass: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  };

  const options: IntersectionObserverInit = {
    root: null, // ao atribuir null, ele usará o viewport
    rootMargin: '0px', // sem offsets na bounding box do root
    threshold: 0.45 // chama o callback apenas quando 45% do elemento estiver na tela
  };

  // Declarando o observer
  const addActiveClassWhenVisibleObserver = new IntersectionObserver(addActiveClass, options);

  // Subscribe nos elementos que precisam ser animados ao ficarem vísiveis
  onScrollAnimations.forEach(element => {
    addActiveClassWhenVisibleObserver.observe(element);
  });
}
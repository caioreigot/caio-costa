/**
 * Faz o mesmo que o setTimeout do JavaScript, porém retorna uma
 * Promise para você conseguir usar o .then() e executar algo após
 * o término da animação.
 * @param {Function} animation A função que você deseja executar
 * @param {Number} timeInMs O tempo de delay para começar a animação em milisegundos
 * @returns {Promise<Boolean>} Retorna uma Promise que se resolve em "true" 
 * após execução da animação
 */
export default function makeAnimation(
  animation: () => void,
  timeInMs: number
): Promise<boolean> {
  return new Promise(resolve => {
    setTimeout(() => {
      animation();
      resolve(true);
    }, timeInMs);
  });
}